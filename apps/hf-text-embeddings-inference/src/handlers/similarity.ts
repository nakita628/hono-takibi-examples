import { OpenAPIHono } from '@hono/zod-openapi'
import { postSimilarityRoute } from '../routes'

const app = new OpenAPIHono()

export const similarityHandler = app.openapi(postSimilarityRoute, (c) => {
  throw new Error('Not implemented')
})
