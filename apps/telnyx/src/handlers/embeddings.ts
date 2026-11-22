import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiEmbeddingsBucketsBucketNameRoute,
  getAiEmbeddingsBucketsBucketNameRoute,
  getAiEmbeddingsBucketsRoute,
  getAiEmbeddingsRoute,
  getAiEmbeddingsTaskIdRoute,
  postAiEmbeddingsRoute,
  postAiEmbeddingsSimilaritySearchRoute,
  postAiEmbeddingsUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const embeddingsHandler = app
  .openapi(getAiEmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiEmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiEmbeddingsBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiEmbeddingsBucketsBucketNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiEmbeddingsBucketsBucketNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiEmbeddingsSimilaritySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiEmbeddingsUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiEmbeddingsTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
