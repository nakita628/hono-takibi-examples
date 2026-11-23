import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeRoute,
  getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDRoute,
  getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute,
  getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute,
  getOrdersV3StatusRoute,
  headOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute,
  postOrdersV3BatchesChangeOrdersChangeOrderTypeRoute,
  postOrdersV3BatchesChangeOrdersRoute,
  postOrdersV3BatchesClearMerchantOrderInfosRoute,
  postOrdersV3BatchesSetMerchantOrderInfosRoute,
  postOrdersV3HarvestRoute,
  postOrdersV3ListFullRoute,
  postOrdersV3ListLightRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute,
  postOrdersV3MarketplaceTechnicalCodeAccountIdHarvestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postOrdersV3BatchesChangeOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersV3BatchesChangeOrdersChangeOrderTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersV3BatchesClearMerchantOrderInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersV3BatchesSetMerchantOrderInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersV3HarvestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersV3ListFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersV3ListLightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersV3StatusRoute, (c) => {
    throw new Error('Not implemented')
  })
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
