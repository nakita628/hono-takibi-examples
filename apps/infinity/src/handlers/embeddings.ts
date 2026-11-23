import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmbeddingsRoute } from '../routes'

const app = new OpenAPIHono()

export const embeddingsHandler = app.openapi(postEmbeddingsRoute, (c) => {
  throw new Error('Not implemented')
})
