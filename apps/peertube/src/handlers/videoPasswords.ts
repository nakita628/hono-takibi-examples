import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosIdPasswordsPasswordIdRoute,
  getApiV1VideosIdPasswordsRoute,
  postApiV1VideosIdPasswordsRoute,
  putApiV1VideosIdPasswordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoPasswordsHandler = app
  .openapi(getApiV1VideosIdPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdPasswordsPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
