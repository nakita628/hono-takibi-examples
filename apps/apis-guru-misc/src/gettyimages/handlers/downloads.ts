import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3DownloadsRoute,
  postV3DownloadsImagesIdRoute,
  postV3DownloadsVideosIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadsHandler = app
  .openapi(getV3DownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3DownloadsImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3DownloadsVideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
