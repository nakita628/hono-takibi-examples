import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMediaMediaNameRoute,
  getMediaMediaNameDownloadRoute,
  getMediaMediaNameRoute,
  getMediaRoute,
  postMediaRoute,
  putMediaMediaNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMediaMediaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaMediaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMediaMediaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaMediaNameDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
