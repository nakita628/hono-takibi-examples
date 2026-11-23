import { OpenAPIHono } from '@hono/zod-openapi'
import { postRestartRoute } from '../routes'

const app = new OpenAPIHono()

export const restartHandler = app.openapi(postRestartRoute, (c) => {
  throw new Error('Not implemented')
})
