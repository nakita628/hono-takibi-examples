import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDataSharesForProducerRoute,
  postActionDescribeDataSharesForProducerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDataSharesForProducerHandler = app
  .openapi(getActionDescribeDataSharesForProducerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDataSharesForProducerRoute, (c) => {
    throw new Error('Not implemented')
  })
