import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPinsPinIdProductTagsRoute,
  postPinsPinIdProductTagsBulkDeleteRoute,
  postPinsPinIdProductTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productTagsHandler = app
  .openapi(postPinsPinIdProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPinsPinIdProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsPinIdProductTagsBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
