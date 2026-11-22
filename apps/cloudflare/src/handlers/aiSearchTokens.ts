import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiSearchTokensIdRoute,
  getAccountsAccountIdAiSearchTokensIdRoute,
  getAccountsAccountIdAiSearchTokensRoute,
  postAccountsAccountIdAiSearchTokensRoute,
  putAccountsAccountIdAiSearchTokensIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiSearchTokensHandler = app
  .openapi(getAccountsAccountIdAiSearchTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiSearchTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiSearchTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
