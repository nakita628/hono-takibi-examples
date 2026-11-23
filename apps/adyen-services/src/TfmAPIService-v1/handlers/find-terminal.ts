import { OpenAPIHono } from '@hono/zod-openapi'
import { postFindTerminalRoute } from '../routes'

const app = new OpenAPIHono()

export const findTerminalHandler = app.openapi(postFindTerminalRoute, (c) => {
  throw new Error('Not implemented')
})
