import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosImportsIdRoute,
  postApiV1VideosImportsIdCancelRoute,
  postApiV1VideosImportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoImportsHandler = app
  .openapi(postApiV1VideosImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosImportsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
