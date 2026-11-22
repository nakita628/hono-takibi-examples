import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ImportlistBulkRoute,
  deleteApiV1ImportlistIdRoute,
  getApiV1ImportlistIdRoute,
  getApiV1ImportlistRoute,
  getApiV1ImportlistSchemaRoute,
  postApiV1ImportlistActionNameRoute,
  postApiV1ImportlistRoute,
  postApiV1ImportlistTestallRoute,
  postApiV1ImportlistTestRoute,
  putApiV1ImportlistBulkRoute,
  putApiV1ImportlistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importListHandler = app
  .openapi(getApiV1ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ImportlistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ImportlistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportlistSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
