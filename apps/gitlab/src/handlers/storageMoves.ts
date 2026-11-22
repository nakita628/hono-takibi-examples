import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4GroupRepositoryStorageMovesRepositoryStorageMoveIdRoute,
  getApiV4GroupRepositoryStorageMovesRoute,
  getApiV4GroupsIdRepositoryStorageMovesRepositoryStorageMoveIdRoute,
  getApiV4GroupsIdRepositoryStorageMovesRoute,
  getApiV4ProjectRepositoryStorageMovesRepositoryStorageMoveIdRoute,
  getApiV4ProjectRepositoryStorageMovesRoute,
  getApiV4ProjectsIdRepositoryStorageMovesRepositoryStorageMoveIdRoute,
  getApiV4ProjectsIdRepositoryStorageMovesRoute,
  getApiV4SnippetRepositoryStorageMovesRepositoryStorageMoveIdRoute,
  getApiV4SnippetRepositoryStorageMovesRoute,
  getApiV4SnippetsIdRepositoryStorageMovesRepositoryStorageMoveIdRoute,
  getApiV4SnippetsIdRepositoryStorageMovesRoute,
  postApiV4GroupRepositoryStorageMovesRoute,
  postApiV4GroupsIdRepositoryStorageMovesRoute,
  postApiV4ProjectRepositoryStorageMovesRoute,
  postApiV4ProjectsIdRepositoryStorageMovesRoute,
  postApiV4SnippetRepositoryStorageMovesRoute,
  postApiV4SnippetsIdRepositoryStorageMovesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageMovesHandler = app
  .openapi(getApiV4GroupRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupRepositoryStorageMovesRepositoryStorageMoveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdRepositoryStorageMovesRepositoryStorageMoveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4SnippetRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetRepositoryStorageMovesRepositoryStorageMoveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetsIdRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4SnippetsIdRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetsIdRepositoryStorageMovesRepositoryStorageMoveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectRepositoryStorageMovesRepositoryStorageMoveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryStorageMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryStorageMovesRepositoryStorageMoveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
