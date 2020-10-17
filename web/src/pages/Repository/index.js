import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FaSpinner,
  FaArrowLeft,
  FaStar,
  FaExclamationCircle,
  FaCode,
} from 'react-icons/fa';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import api from '../../services/api';

import Container from '../../components/Container';
import PageNav from '../../components/PageNav';
import {
  Loading,
  Owner,
  OwnerProfile,
  RepoInfo,
  IssueList,
} from './repositoryStyles';

export default class Repository extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
        username: PropTypes.string,
      }),
    }).isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    repository: {},
    repositories: [],
    loading: true,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);
    const username = repoName.substr(0, repoName.indexOf('/'));

    const [repository, repositories] = await Promise.all([
      api.get(`/repo`, { params: { repoName } }),
      api.get(`/user`, { params: { username, page } }),
    ]);

    this.setState({
      repository: repository.data,
      repositories: repositories.data,
      loading: false,
    });
  }

  loadRepositories = async () => {
    const { match } = this.props;
    const { page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);
    const username = repoName.substr(0, repoName.indexOf('/'));

    const response = await api.get(`/user`, { params: { username, page } });

    this.setState({ repositories: response.data });
  };

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({ page: action === 'back' ? page - 1 : page + 1 });
    this.loadRepositories();
  };

  render() {
    const { repository, repositories, loading, page } = this.state;

    if (loading) {
      return (
        <Container>
          <Loading loading={loading ? 1 : 0}>
            <FaSpinner color="#0099ff" size={24} />
          </Loading>
        </Container>
      );
    }

    return (
      <Container>
        <Owner>
          <div>
            <Link to="/">
              <FaArrowLeft color="#0099ff" size={16} />
            </Link>
          </div>

          <OwnerProfile>
            <a
              href={repository.owner.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
            </a>
            <h2>{repository.owner.login}</h2>
          </OwnerProfile>

          <RepoInfo>
            <h1>
              <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repository.name}
              </a>
            </h1>
            <div>
              <p>
                <FaCode color="#fff" />
                &nbsp;code<span>{repository.language}</span>
              </p>
              <p>
                <FaExclamationCircle color="#FFF" size={12} />
                &nbsp;issues<span>{repository.open_issues_count}</span>
              </p>
              <p>
                created at
                <span>
                  {new Date(repository.created_at).toLocaleDateString()}
                </span>
              </p>
              <p>
                <FaStar color="#FFF" />
                <span>{repository.stargazers_count}</span>
              </p>
            </div>
            <p>{repository.description}</p>
          </RepoInfo>
        </Owner>
        <hr />
        <h3>...more repositories:</h3>
        <IssueList>
          {repositories.map(repo => (
            <li key={String(repo.id)}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <div>
                  <strong>
                    {repo.name}
                    <span>
                      <FaStar />
                      {repo.stargazers_count}
                    </span>
                  </strong>
                  <p>{repo.description}</p>
                </div>
              </a>
            </li>
          ))}
          <PageNav>
            <button
              type="button"
              disabled={page < 2}
              onClick={() => this.handlePage('back')}
            >
              <GoArrowLeft />
              Prev. Page
            </button>
            <button type="button" onClick={() => this.handlePage('next')}>
              Next Page
              <GoArrowRight />
            </button>
          </PageNav>
        </IssueList>
      </Container>
    );
  }
}
