import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthRoute,
  getInfoRoute,
  getMetricsRoute,
  postDecodeRoute,
  postEmbedAllRoute,
  postEmbedRoute,
  postEmbedSparseRoute,
  postPredictRoute,
  postRerankRoute,
  postSimilarityRoute,
  postTokenizeRoute,
  postV1EmbeddingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textEmbeddingsInferenceHandler = app
  .openapi(postDecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmbedAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmbedSparseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRerankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimilarityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTokenizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
