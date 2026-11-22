import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsWorkloadsWorkloadIdRoute,
  getAccountsAccountIdCwsWorkloadsRoute,
  getAccountsAccountIdCwsWorkloadsWorkloadIdRoute,
  postAccountsAccountIdCwsWorkloadsRoute,
  putAccountsAccountIdCwsWorkloadsWorkloadIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsWorkloadsHandler = app
  .openapi(getAccountsAccountIdCwsWorkloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsWorkloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsWorkloadsWorkloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsWorkloadsWorkloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsWorkloadsWorkloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
