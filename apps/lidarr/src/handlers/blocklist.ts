import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1BlocklistBulkRoute,
  deleteApiV1BlocklistIdRoute,
  getApiV1BlocklistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocklistHandler = app
  .openapi(getApiV1BlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BlocklistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BlocklistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
