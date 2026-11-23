import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSkuBindingPvtSkusellerAdminRoute,
  getSkuBindingPvtSkusellerListBysellerIdSellerIdRoute,
  getSkuBindingPvtSkusellerPagedSelleridSellerIdRoute,
  getSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute,
  postSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdRoute,
  postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute,
  postSkuBindingPvtSkusellerChangenotificationSkuIdRoute,
  postSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdRoute,
  postSkuBindingPvtSkusellerInsertionRoute,
  postSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdRoute,
  putSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuBindingHandler = app
  .openapi(postSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkuBindingPvtSkusellerAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkuBindingPvtSkusellerChangenotificationSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkuBindingPvtSkusellerInsertionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkuBindingPvtSkusellerListBysellerIdSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkuBindingPvtSkusellerPagedSelleridSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
