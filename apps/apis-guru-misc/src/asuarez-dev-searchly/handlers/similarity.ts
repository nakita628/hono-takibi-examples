import { OpenAPIHono } from '@hono/zod-openapi'
import { getSimilarityBySongRoute, postSimilarityByContentRoute } from '../routes'

const app = new OpenAPIHono()

export const similarityHandler = app
  .openapi(postSimilarityByContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimilarityBySongRoute, (c) => {
    throw new Error('Not implemented')
  })
