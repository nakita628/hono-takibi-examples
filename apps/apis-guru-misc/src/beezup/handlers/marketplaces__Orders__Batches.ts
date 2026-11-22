import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeRoute,
  postV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosRoute,
  postV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__Orders__BatchesHandler = app
  .openapi(postV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
