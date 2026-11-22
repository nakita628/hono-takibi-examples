import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedCacheNodesOfferingsRoute,
  postActionDescribeReservedCacheNodesOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeReservedCacheNodesOfferingsHandler = app
  .openapi(getActionDescribeReservedCacheNodesOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedCacheNodesOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
