import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDataSharesForConsumerRoute,
  postActionDescribeDataSharesForConsumerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDataSharesForConsumerHandler = app
  .openapi(getActionDescribeDataSharesForConsumerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDataSharesForConsumerRoute, (c) => {
    throw new Error('Not implemented')
  })
