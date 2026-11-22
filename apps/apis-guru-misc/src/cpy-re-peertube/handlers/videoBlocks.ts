import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosIdBlacklistRoute,
  getApiV1VideosBlacklistRoute,
  postApiV1VideosIdBlacklistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoBlocksHandler = app
  .openapi(getApiV1VideosBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
