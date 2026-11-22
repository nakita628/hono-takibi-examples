import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609QuotesGdprDeleteRoute,
  postCrmObjects202609QuotesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609QuotesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
