import { OpenAPIHono } from '@hono/zod-openapi'
import { getBulkLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkLookupHandler = app.openapi(getBulkLookupRoute, (c) => {
  throw new Error('Not implemented')
})
