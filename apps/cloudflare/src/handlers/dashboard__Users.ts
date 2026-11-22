import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdCloudforceOneV2RequestsProjectTypeUserMeRoute } from '../routes'

const app = new OpenAPIHono()

export const dashboard__UsersHandler = app.openapi(
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeUserMeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
