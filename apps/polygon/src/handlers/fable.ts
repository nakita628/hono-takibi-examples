import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConsumerSpendingEuV1MerchantAggregatesRoute,
  getConsumerSpendingEuV1MerchantHierarchyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fableHandler = app
  .openapi(getConsumerSpendingEuV1MerchantAggregatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerSpendingEuV1MerchantHierarchyRoute, (c) => {
    throw new Error('Not implemented')
  })
