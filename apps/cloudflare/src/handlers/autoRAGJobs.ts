import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAutoragRagsIdJobsJobIdLogsRoute,
  getAccountsAccountIdAutoragRagsIdJobsJobIdRoute,
  getAccountsAccountIdAutoragRagsIdJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoRAGJobsHandler = app
  .openapi(getAccountsAccountIdAutoragRagsIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAutoragRagsIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAutoragRagsIdJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
