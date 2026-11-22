import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBuildsTokensBuildTokenUuidRoute,
  getAccountsAccountIdBuildsTokensRoute,
  postAccountsAccountIdBuildsTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildTokensHandler = app
  .openapi(getAccountsAccountIdBuildsTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBuildsTokensBuildTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
