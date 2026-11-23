import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAggregateIdFormatRoute,
  postActionDescribeAggregateIdFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAggregateIdFormatHandler = app
  .openapi(getActionDescribeAggregateIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAggregateIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
