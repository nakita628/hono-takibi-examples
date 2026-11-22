import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2LicensesIDRoute, getApiV2LicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getApiV2LicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LicensesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
