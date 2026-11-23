import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTriggerEmbeddingCameraNameNameRoute,
  postTriggerEmbeddingRoute,
  putTriggerEmbeddingCameraNameNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const triggerHandler = app
  .openapi(postTriggerEmbeddingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTriggerEmbeddingCameraNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTriggerEmbeddingCameraNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
