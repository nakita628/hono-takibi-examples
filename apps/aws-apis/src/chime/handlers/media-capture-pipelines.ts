import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMediaCapturePipelinesMediaPipelineIdRoute,
  getMediaCapturePipelinesMediaPipelineIdRoute,
  getMediaCapturePipelinesRoute,
  postMediaCapturePipelinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaCapturePipelinesHandler = app
  .openapi(postMediaCapturePipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaCapturePipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMediaCapturePipelinesMediaPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaCapturePipelinesMediaPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
