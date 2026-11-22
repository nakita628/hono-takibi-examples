import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRestApi3ExpressionAnalyseRoute,
  postRestApi3ExpressionEvalRoute,
  postRestApi3ExpressionEvaluateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jiraExpressionsHandler = app
  .openapi(postRestApi3ExpressionAnalyseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ExpressionEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ExpressionEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
