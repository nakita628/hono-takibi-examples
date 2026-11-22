import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3ImportlistBulkRoute,
  deleteApiV3ImportlistIdRoute,
  getApiV3ImportlistIdRoute,
  getApiV3ImportlistRoute,
  getApiV3ImportlistSchemaRoute,
  postApiV3ImportlistActionNameRoute,
  postApiV3ImportlistRoute,
  postApiV3ImportlistTestallRoute,
  postApiV3ImportlistTestRoute,
  putApiV3ImportlistBulkRoute,
  putApiV3ImportlistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importListHandler = app
  .openapi(getApiV3ImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ImportlistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ImportlistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
