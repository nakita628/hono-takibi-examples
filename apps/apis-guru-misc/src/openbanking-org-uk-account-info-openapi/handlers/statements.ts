import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const statementsHandler = app.openapi(getStatementsRoute, (c) => {
  throw new Error('Not implemented')
})
