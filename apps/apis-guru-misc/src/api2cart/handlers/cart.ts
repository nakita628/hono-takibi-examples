import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCartCouponDeleteJsonRoute,
  deleteCartDeleteJsonRoute,
  deleteCartMetaDataUnsetJsonRoute,
  deleteCartScriptDeleteJsonRoute,
  getBridgeDownloadFileRoute,
  getCartBridgeJsonRoute,
  getCartCatalogPriceRulesCountJsonRoute,
  getCartCatalogPriceRulesListJsonRoute,
  getCartConfigJsonRoute,
  getCartCouponCountJsonRoute,
  getCartCouponListJsonRoute,
  getCartDisconnectJsonRoute,
  getCartGiftcardCountJsonRoute,
  getCartGiftcardListJsonRoute,
  getCartInfoJsonRoute,
  getCartListJsonRoute,
  getCartMetaDataListJsonRoute,
  getCartMethodsJsonRoute,
  getCartPluginListJsonRoute,
  getCartScriptListJsonRoute,
  getCartShippingZonesListJsonRoute,
  getCartValidateJsonRoute,
  postCartClearCacheJsonRoute,
  postCartCouponAddJsonRoute,
  postCartCouponConditionAddJsonRoute,
  postCartCreateJsonRoute,
  postCartGiftcardAddJsonRoute,
  postCartMetaDataSetJsonRoute,
  postCartScriptAddJsonRoute,
  putCartConfigUpdateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartHandler = app
  .openapi(getBridgeDownloadFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartBridgeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartCatalogPriceRulesCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartCatalogPriceRulesListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCartClearCacheJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartConfigJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCartConfigUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCartCouponAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCartCouponConditionAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartCouponCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCartCouponDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartCouponListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCartCreateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCartDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartDisconnectJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCartGiftcardAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartGiftcardCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartGiftcardListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartMetaDataListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCartMetaDataSetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCartMetaDataUnsetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartMethodsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartPluginListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCartScriptAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCartScriptDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartScriptListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartShippingZonesListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCartValidateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
