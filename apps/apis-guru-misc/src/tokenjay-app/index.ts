import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgeusdInfoRoute,
  getCancelbabelBoxIdRoute,
  getCreatebabelAddressRoute,
  getMosaikBabelfeeIndexRoute,
  getMosaikBabelfeeNewofferRoute,
  getMosaikBabelfeeNotificationcheckRoute,
  getMosaikBoxconsolidationConsolidateP2pkaddressRoute,
  getMosaikBoxconsolidationIndexRoute,
  getMosaikTokenburnGetUuidRoute,
  getMosaikTokenburnRoute,
  getPaymentStateRequestIdRoute,
  getPeersListRoute,
  getSigrsvExchangeAmountInfoRoute,
  getSigrsvExchangeIndexRoute,
  getSigrsvPriceRoute,
  getSigusdExchangeAmountInfoRoute,
  getSigusdExchangeIndexRoute,
  getSigusdPriceRoute,
  getTokensCheckTokenIdTokenNameRoute,
  getTokensListBlockedRoute,
  getTokensListGenuineRoute,
  getTokensPricesAllRoute,
  getTokensPricesTokenIdRoute,
  postMosaikBabelfeeNewofferDoitRoute,
  postMosaikBabelfeeNewofferNewInputRoute,
  postMosaikTokenburnPrepareRoute,
  postPaymentAddrequestRoute,
} from './routes'
import {
  getAgeusdInfoRouteHandler,
  getCancelbabelBoxIdRouteHandler,
  getCreatebabelAddressRouteHandler,
  getMosaikBabelfeeIndexRouteHandler,
  getMosaikBabelfeeNewofferRouteHandler,
  getMosaikBabelfeeNotificationcheckRouteHandler,
  getMosaikBoxconsolidationConsolidateP2pkaddressRouteHandler,
  getMosaikBoxconsolidationIndexRouteHandler,
  getMosaikTokenburnGetUuidRouteHandler,
  getMosaikTokenburnRouteHandler,
  getPaymentStateRequestIdRouteHandler,
  getPeersListRouteHandler,
  getSigrsvExchangeAmountInfoRouteHandler,
  getSigrsvExchangeIndexRouteHandler,
  getSigrsvPriceRouteHandler,
  getSigusdExchangeAmountInfoRouteHandler,
  getSigusdExchangeIndexRouteHandler,
  getSigusdPriceRouteHandler,
  getTokensCheckTokenIdTokenNameRouteHandler,
  getTokensListBlockedRouteHandler,
  getTokensListGenuineRouteHandler,
  getTokensPricesAllRouteHandler,
  getTokensPricesTokenIdRouteHandler,
  postMosaikBabelfeeNewofferDoitRouteHandler,
  postMosaikBabelfeeNewofferNewInputRouteHandler,
  postMosaikTokenburnPrepareRouteHandler,
  postPaymentAddrequestRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAgeusdInfoRoute, getAgeusdInfoRouteHandler)
  .openapi(getCancelbabelBoxIdRoute, getCancelbabelBoxIdRouteHandler)
  .openapi(getCreatebabelAddressRoute, getCreatebabelAddressRouteHandler)
  .openapi(getMosaikBabelfeeIndexRoute, getMosaikBabelfeeIndexRouteHandler)
  .openapi(getMosaikBabelfeeNewofferRoute, getMosaikBabelfeeNewofferRouteHandler)
  .openapi(postMosaikBabelfeeNewofferDoitRoute, postMosaikBabelfeeNewofferDoitRouteHandler)
  .openapi(postMosaikBabelfeeNewofferNewInputRoute, postMosaikBabelfeeNewofferNewInputRouteHandler)
  .openapi(getMosaikBabelfeeNotificationcheckRoute, getMosaikBabelfeeNotificationcheckRouteHandler)
  .openapi(getMosaikBoxconsolidationIndexRoute, getMosaikBoxconsolidationIndexRouteHandler)
  .openapi(
    getMosaikBoxconsolidationConsolidateP2pkaddressRoute,
    getMosaikBoxconsolidationConsolidateP2pkaddressRouteHandler,
  )
  .openapi(getMosaikTokenburnRoute, getMosaikTokenburnRouteHandler)
  .openapi(getMosaikTokenburnGetUuidRoute, getMosaikTokenburnGetUuidRouteHandler)
  .openapi(postMosaikTokenburnPrepareRoute, postMosaikTokenburnPrepareRouteHandler)
  .openapi(postPaymentAddrequestRoute, postPaymentAddrequestRouteHandler)
  .openapi(getPaymentStateRequestIdRoute, getPaymentStateRequestIdRouteHandler)
  .openapi(getPeersListRoute, getPeersListRouteHandler)
  .openapi(getSigrsvExchangeIndexRoute, getSigrsvExchangeIndexRouteHandler)
  .openapi(getSigrsvExchangeAmountInfoRoute, getSigrsvExchangeAmountInfoRouteHandler)
  .openapi(getSigrsvPriceRoute, getSigrsvPriceRouteHandler)
  .openapi(getSigusdExchangeIndexRoute, getSigusdExchangeIndexRouteHandler)
  .openapi(getSigusdExchangeAmountInfoRoute, getSigusdExchangeAmountInfoRouteHandler)
  .openapi(getSigusdPriceRoute, getSigusdPriceRouteHandler)
  .openapi(getTokensCheckTokenIdTokenNameRoute, getTokensCheckTokenIdTokenNameRouteHandler)
  .openapi(getTokensListBlockedRoute, getTokensListBlockedRouteHandler)
  .openapi(getTokensListGenuineRoute, getTokensListGenuineRouteHandler)
  .openapi(getTokensPricesAllRoute, getTokensPricesAllRouteHandler)
  .openapi(getTokensPricesTokenIdRoute, getTokensPricesTokenIdRouteHandler)

export default app
