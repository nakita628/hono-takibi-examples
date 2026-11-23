import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmbeddingsImageRoute } from '../routes'

const app = new OpenAPIHono()

export const embeddingsImageHandler = app.openapi(postEmbeddingsImageRoute, (c) => {
  throw new Error('Not implemented')
})
