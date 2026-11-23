import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeMetricCollectionTypesRoute,
  postActionDescribeMetricCollectionTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeMetricCollectionTypesHandler = app
  .openapi(getActionDescribeMetricCollectionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeMetricCollectionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
