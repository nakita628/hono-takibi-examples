import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSpotPriceHistoryRoute,
  postActionDescribeSpotPriceHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeSpotPriceHistoryHandler = app
  .openapi(getActionDescribeSpotPriceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSpotPriceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
