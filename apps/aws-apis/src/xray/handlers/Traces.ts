import { OpenAPIHono } from '@hono/zod-openapi'
import { postTracesRoute } from '../routes'

const app = new OpenAPIHono()

export const TracesHandler = app.openapi(postTracesRoute, (c) => {
  throw new Error('Not implemented')
})
