import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdServiceAccountsUserIdRoute,
  deleteApiV4ProjectsIdServiceAccountsUserIdRoute,
  getApiV4GroupsIdServiceAccountsRoute,
  getApiV4GroupsIdServiceAccountsUserIdRoute,
  getApiV4ProjectsIdServiceAccountsRoute,
  getApiV4ProjectsIdServiceAccountsUserIdRoute,
  getApiV4ServiceAccountsRoute,
  patchApiV4GroupsIdServiceAccountsUserIdRoute,
  patchApiV4ProjectsIdServiceAccountsUserIdRoute,
  patchApiV4ServiceAccountsUserIdRoute,
  postApiV4GroupsIdServiceAccountsRoute,
  postApiV4ProjectsIdServiceAccountsRoute,
  postApiV4ServiceAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceAccountsHandler = app
  .openapi(postApiV4ServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ServiceAccountsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdServiceAccountsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdServiceAccountsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdServiceAccountsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdServiceAccountsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdServiceAccountsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4GroupsIdServiceAccountsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
