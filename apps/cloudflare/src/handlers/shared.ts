import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdWorkersObservabilitySharedQueryIdRoute,
  postAccountsAccountIdWorkersObservabilitySharedQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedHandler = app
  .openapi(postAccountsAccountIdWorkersObservabilitySharedQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersObservabilitySharedQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
