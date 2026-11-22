import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedNodeExchangeStatusRoute,
  postActionDescribeReservedNodeExchangeStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeReservedNodeExchangeStatusHandler = app
  .openapi(getActionDescribeReservedNodeExchangeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedNodeExchangeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
