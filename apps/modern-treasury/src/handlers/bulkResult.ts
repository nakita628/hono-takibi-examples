import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiBulkResultsIdRoute, getApiBulkResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkResultHandler = app
  .openapi(getApiBulkResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBulkResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
