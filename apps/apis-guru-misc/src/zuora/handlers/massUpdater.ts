import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BulkBulkKeyRoute, postV1BulkRoute, putV1BulkBulkKeyStopRoute } from '../routes'

const app = new OpenAPIHono()

export const massUpdaterHandler = app
  .openapi(postV1BulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkBulkKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BulkBulkKeyStopRoute, (c) => {
    throw new Error('Not implemented')
  })
