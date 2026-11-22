import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAnalysisSchemesRoute,
  postActionDescribeAnalysisSchemesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAnalysisSchemesHandler = app
  .openapi(getActionDescribeAnalysisSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAnalysisSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
