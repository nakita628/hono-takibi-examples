import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicensesLicenseRoute, getLicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
