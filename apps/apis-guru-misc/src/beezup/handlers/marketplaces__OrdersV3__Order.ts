import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDRoute,
  getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute,
  getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute,
  headOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdHarvestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__OrdersV3__OrderHandler = app
  .openapi(postOrdersV3MarketplaceTechnicalCodeAccountIdHarvestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
