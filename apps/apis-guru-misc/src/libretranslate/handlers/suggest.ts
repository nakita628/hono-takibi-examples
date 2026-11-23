import { OpenAPIHono } from '@hono/zod-openapi'
import { postSuggestRoute } from '../routes'

const app = new OpenAPIHono()

export const suggestHandler = app.openapi(postSuggestRoute, (c) => {
  throw new Error('Not implemented')
})
