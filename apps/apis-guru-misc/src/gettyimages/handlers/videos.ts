import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3VideosIdDownloadhistoryRoute,
  getV3VideosIdRoute,
  getV3VideosIdSameSeriesRoute,
  getV3VideosIdSimilarRoute,
  getV3VideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(getV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosIdDownloadhistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosIdSameSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
