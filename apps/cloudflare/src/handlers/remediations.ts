import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDataSecurityPostureRemediationsJobsRoute,
  postAccountsAccountIdDataSecurityPostureRemediationsJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remediationsHandler = app
  .openapi(getAccountsAccountIdDataSecurityPostureRemediationsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureRemediationsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
