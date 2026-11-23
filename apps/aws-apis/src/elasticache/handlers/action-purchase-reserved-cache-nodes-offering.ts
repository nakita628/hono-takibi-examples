import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPurchaseReservedCacheNodesOfferingRoute,
  postActionPurchaseReservedCacheNodesOfferingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionPurchaseReservedCacheNodesOfferingHandler = app
  .openapi(getActionPurchaseReservedCacheNodesOfferingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPurchaseReservedCacheNodesOfferingRoute, (c) => {
    throw new Error('Not implemented')
  })
