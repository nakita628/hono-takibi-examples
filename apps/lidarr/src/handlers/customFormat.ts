import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CustomformatBulkRoute,
  deleteApiV1CustomformatIdRoute,
  getApiV1CustomformatIdRoute,
  getApiV1CustomformatRoute,
  getApiV1CustomformatSchemaRoute,
  postApiV1CustomformatRoute,
  putApiV1CustomformatBulkRoute,
  putApiV1CustomformatIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFormatHandler = app
  .openapi(getApiV1CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomformatBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomformatBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomformatSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
