import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app.openapi(getLicensesRoute, (c) => {
  throw new Error('Not implemented')
})
