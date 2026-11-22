import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1VideosIdLiveSessionRoute,
  getApiV1VideosLiveIdRoute,
  getApiV1VideosLiveIdSessionsRoute,
  postApiV1VideosLiveRoute,
  putApiV1VideosLiveIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveVideosHandler = app
  .openapi(postApiV1VideosLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosLiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLiveIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdLiveSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
