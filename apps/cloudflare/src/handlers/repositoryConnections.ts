import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBuildsReposConnectionsRepoConnectionUuidRoute,
  putAccountsAccountIdBuildsReposConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repositoryConnectionsHandler = app
  .openapi(putAccountsAccountIdBuildsReposConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBuildsReposConnectionsRepoConnectionUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
