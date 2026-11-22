import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute,
  getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute,
  headV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute,
  postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute,
  postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute,
  postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute,
  postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__Orders__OrderHandler = app
  .openapi(getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
