import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsAutocompletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const usAutocompletionsHandler = app.openapi(postUsAutocompletionsRoute, (c) => {
  throw new Error('Not implemented')
})
