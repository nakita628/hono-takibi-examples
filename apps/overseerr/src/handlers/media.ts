import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMediaMediaIdRoute,
  getMediaMediaIdWatchDataRoute,
  getMediaRoute,
  postMediaMediaIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaMediaIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaMediaIdWatchDataRoute, (c) => {
    throw new Error('Not implemented')
  })
