import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ChatCompletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(postApiV1ChatCompletionsRoute, (c) => {
  throw new Error('Not implemented')
})
