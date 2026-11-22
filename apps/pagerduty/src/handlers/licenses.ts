import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicenseAllocationsRoute, getLicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getLicenseAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
