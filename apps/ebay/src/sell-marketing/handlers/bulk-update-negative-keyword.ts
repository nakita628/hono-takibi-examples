import { OpenAPIHono } from '@hono/zod-openapi'
import { postBulkUpdateNegativeKeywordRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkUpdateNegativeKeywordHandler = app.openapi(
  postBulkUpdateNegativeKeywordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
