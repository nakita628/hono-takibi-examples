import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthRoute,
  getInfoRoute,
  getMetricsRoute,
  getV1ModelsRoute,
  postChatTokenizeRoute,
  postGenerateRoute,
  postGenerateStreamRoute,
  postInvocationsRoute,
  postRoute,
  postTokenizeRoute,
  postV1ChatCompletionsRoute,
  postV1CompletionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textGenerationInferenceHandler = app
  .openapi(postRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatTokenizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenerateStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTokenizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
