import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTerminalDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const getTerminalDetailsHandler = app.openapi(postGetTerminalDetailsRoute, (c) => {
  throw new Error('Not implemented')
})
