import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersObservabilityQueriesQueryIdRoute,
  getAccountsAccountIdWorkersObservabilityQueriesQueryIdRoute,
  getAccountsAccountIdWorkersObservabilityQueriesRoute,
  patchAccountsAccountIdWorkersObservabilityQueriesQueryIdRoute,
  postAccountsAccountIdWorkersObservabilityQueriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const savedQueriesHandler = app
  .openapi(getAccountsAccountIdWorkersObservabilityQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersObservabilityQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersObservabilityQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersObservabilityQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersObservabilityQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
