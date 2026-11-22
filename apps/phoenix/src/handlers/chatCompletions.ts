import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ChatCompletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const chatCompletionsHandler = app.openapi(postV1ChatCompletionsRoute, (c) => {
  throw new Error('Not implemented')
})
