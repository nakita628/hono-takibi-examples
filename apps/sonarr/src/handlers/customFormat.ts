import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3CustomformatBulkRoute,
  deleteApiV3CustomformatIdRoute,
  getApiV3CustomformatIdRoute,
  getApiV3CustomformatRoute,
  getApiV3CustomformatSchemaRoute,
  postApiV3CustomformatRoute,
  putApiV3CustomformatBulkRoute,
  putApiV3CustomformatIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFormatHandler = app
  .openapi(getApiV3CustomformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3CustomformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3CustomformatBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3CustomformatBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CustomformatSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
