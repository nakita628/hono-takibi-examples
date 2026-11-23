import { OpenAPIHono } from '@hono/zod-openapi'
import { postBulkCreateNegativeKeywordRoute } from '../routes'

const app = new OpenAPIHono()

export const bulkCreateNegativeKeywordHandler = app.openapi(
  postBulkCreateNegativeKeywordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
