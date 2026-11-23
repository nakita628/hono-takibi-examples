import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicensesNameRoute, getLicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
