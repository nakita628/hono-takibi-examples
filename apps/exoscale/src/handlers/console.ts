import { OpenAPIHono } from '@hono/zod-openapi'
import { getConsoleIdRoute } from '../routes'

const app = new OpenAPIHono()

export const consoleHandler = app.openapi(getConsoleIdRoute, (c) => {
  throw new Error('Not implemented')
})
