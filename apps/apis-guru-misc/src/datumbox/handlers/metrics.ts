import { OpenAPIHono } from '@hono/zod-openapi'
import { post10DocumentSimilarityJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app.openapi(post10DocumentSimilarityJsonRoute, (c) => {
  throw new Error('Not implemented')
})
