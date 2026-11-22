import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersSubdomainRoute,
  getAccountsAccountIdWorkersSubdomainRoute,
  putAccountsAccountIdWorkersSubdomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workerSubdomainHandler = app
  .openapi(deleteAccountsAccountIdWorkersSubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersSubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersSubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
