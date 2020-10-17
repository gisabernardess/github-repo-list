import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FaGithubAlt,
  FaPlus,
  FaSpinner,
  FaExclamationTriangle,
  FaStar,
} from 'react-icons/fa';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import api from '../../services/api';

import Container from '../../components/Container';
import PageNav from '../../components/PageNav';
import { Form, SubmitButton, ErrorMessage, List } from './mainStyles';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [search, setSearch] = useState('react');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get('/search', {
        params: { topic: search, page },
      });

      setRepositories(response.data);
      setNewRepo('');
      setError(false);
      setErrorMessage('');
    }

    loadRepositories();
  }, [page, search]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  async function loadPage() {
    const response = await api.get('/search', {
      params: { topic: search, page },
    });

    setRepositories(response.data);
  }

  async function handlePage(action) {
    await setPage(action === 'back' ? page - 1 : page + 1);
    loadPage();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      if (newRepo === '') throw new Error('You need to inform one repository');

      setSearch(newRepo);

      const response = await api.get('/search', {
        params: { topic: newRepo, page },
      });

      setRepositories(response.data);
      setNewRepo('');
      setError(false);
      setErrorMessage('');
    } catch (Error) {
      setError(true);
      setErrorMessage(
        Error.message === 'Request failed with status code 404'
          ? 'Repository not found'
          : Error.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories List
      </h1>
      <Form onSubmit={handleSubmit} error={error ? 1 : 0}>
        <input
          type="text"
          placeholder={error ? 'Try again' : 'Search repositories...'}
          value={newRepo}
          onChange={handleInputChange}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
              <FaPlus color="#FFF" size={14} />
            )}
        </SubmitButton>
      </Form>
      <ErrorMessage>
        {error ? (
          <small>
            <FaExclamationTriangle color="red" />
            {errorMessage}
          </small>
        ) : (
            <></>
          )}
      </ErrorMessage>

      <List>
        {repositories.map(repository => (
          <li key={String(repository.id)}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>
                <Link
                  to={`/repository/${encodeURIComponent(repository.full_name)}`}
                >
                  {repository.name}
                </Link>

                <span>
                  <FaStar size={12} />
                  {repository.stargazers_count}
                </span>
              </strong>
              <p>{repository.owner.login}</p>
              <p>{repository.description}</p>
            </div>
          </li>
        ))}
        <PageNav>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => handlePage('back')}
          >
            <GoArrowLeft />
            Prev. Page
          </button>
          <button type="button" onClick={() => handlePage('next')}>
            Next Page
            <GoArrowRight />
          </button>
        </PageNav>
      </List>
    </Container>
  );
}
