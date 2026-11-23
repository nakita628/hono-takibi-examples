import { OpenAPIHono } from '@hono/zod-openapi'
import { getSensesRoute } from '../routes'

const app = new OpenAPIHono()

export const sensesHandler = app.openapi(getSensesRoute, (c) => {
  throw new Error('Not implemented')
})
