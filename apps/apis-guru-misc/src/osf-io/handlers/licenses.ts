import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicenseLicenseIdIndexRoute, getLicensesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getLicenseLicenseIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
