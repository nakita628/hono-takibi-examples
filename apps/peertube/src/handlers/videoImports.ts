import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosImportsIdRoute,
  postApiV1VideosIdImportRetryRoute,
  postApiV1VideosImportsIdCancelRoute,
  postApiV1VideosImportsIdRetryRoute,
  postApiV1VideosImportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoImportsHandler = app
  .openapi(postApiV1VideosImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosImportsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosImportsIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdImportRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
