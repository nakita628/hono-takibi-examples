import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuerySuggestionsNameRoute,
  getQuerySuggestionsRoute,
  postQueryAnalyzeRoute,
  postQueryAstRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(postQueryAstRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuerySuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuerySuggestionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
