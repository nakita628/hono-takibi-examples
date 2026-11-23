import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedCacheNodesOfferingsRoute,
  postActionDescribeReservedCacheNodesOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReservedCacheNodesOfferingsHandler = app
  .openapi(getActionDescribeReservedCacheNodesOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedCacheNodesOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
