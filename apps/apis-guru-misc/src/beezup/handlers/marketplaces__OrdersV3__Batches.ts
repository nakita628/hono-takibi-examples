import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrdersV3BatchesChangeOrdersChangeOrderTypeRoute,
  postOrdersV3BatchesChangeOrdersRoute,
  postOrdersV3BatchesClearMerchantOrderInfosRoute,
  postOrdersV3BatchesSetMerchantOrderInfosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__OrdersV3__BatchesHandler = app
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
