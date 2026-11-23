import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMediaSyncCurrentRoute,
  getMediaSyncStatusJobIdRoute,
  postMediaSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(postMediaSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaSyncCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaSyncStatusJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
