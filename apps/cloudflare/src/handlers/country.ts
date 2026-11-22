import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdCloudforceOneEventsCountriesRoute } from '../routes'

const app = new OpenAPIHono()

export const countryHandler = app.openapi(
  getAccountsAccountIdCloudforceOneEventsCountriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
