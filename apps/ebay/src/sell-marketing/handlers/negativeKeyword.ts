import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNegativeKeywordNegativeKeywordIdRoute,
  getNegativeKeywordRoute,
  postBulkCreateNegativeKeywordRoute,
  postBulkUpdateNegativeKeywordRoute,
  postNegativeKeywordRoute,
  putNegativeKeywordNegativeKeywordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const negativeKeywordHandler = app
  .openapi(postBulkCreateNegativeKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkUpdateNegativeKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNegativeKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNegativeKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNegativeKeywordNegativeKeywordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNegativeKeywordNegativeKeywordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
