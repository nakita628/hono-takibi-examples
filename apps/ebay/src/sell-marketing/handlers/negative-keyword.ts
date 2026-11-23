import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNegativeKeywordNegativeKeywordIdRoute,
  getNegativeKeywordRoute,
  postNegativeKeywordRoute,
  putNegativeKeywordNegativeKeywordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const negativeKeywordHandler = app
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
