import { OpenAPIHono } from '@hono/zod-openapi'
import { postCompletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const completionsHandler = app.openapi(postCompletionsRoute, (c) => {
  throw new Error('Not implemented')
})
