import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClipsDownloadsRoute,
  getClipsRoute,
  postClipsRoute,
  postVideosClipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clipsHandler = app
  .openapi(postClipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosClipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClipsDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
