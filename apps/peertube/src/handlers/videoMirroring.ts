import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ServerRedundancyVideosRedundancyIdRoute,
  getApiV1ServerRedundancyVideosRoute,
  postApiV1ServerRedundancyVideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoMirroringHandler = app
  .openapi(getApiV1ServerRedundancyVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerRedundancyVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerRedundancyVideosRedundancyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
