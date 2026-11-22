import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AlbumIdRoute,
  getApiV1AlbumIdRoute,
  getApiV1AlbumRoute,
  postApiV1AlbumRoute,
  putApiV1AlbumIdRoute,
  putApiV1AlbumMonitorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const albumHandler = app
  .openapi(getApiV1AlbumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AlbumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AlbumMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
