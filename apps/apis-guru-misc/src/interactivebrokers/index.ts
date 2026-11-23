import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountOrdersCustomerOrderIdRoute,
  getAccountsAccountOrdersCustomerOrderIdRoute,
  getAccountsAccountOrdersRoute,
  getAccountsAccountPositionsRoute,
  getAccountsAccountSummaryRoute,
  getAccountsAccountTradesRoute,
  getAccountsRoute,
  getMarketdataExchangeComponentsRoute,
  getMarketdataSnapshotRoute,
  getSecdefRoute,
  postAccountsAccountOrderImpactRoute,
  postAccountsAccountOrdersRoute,
  postOauthAccessTokenRoute,
  postOauthLiveSessionTokenRoute,
  postOauthRequestTokenRoute,
  putAccountsAccountOrdersCustomerOrderIdRoute,
} from './routes'
import {
  deleteAccountsAccountOrdersCustomerOrderIdRouteHandler,
  getAccountsAccountOrdersCustomerOrderIdRouteHandler,
  getAccountsAccountOrdersRouteHandler,
  getAccountsAccountPositionsRouteHandler,
  getAccountsAccountSummaryRouteHandler,
  getAccountsAccountTradesRouteHandler,
  getAccountsRouteHandler,
  getMarketdataExchangeComponentsRouteHandler,
  getMarketdataSnapshotRouteHandler,
  getSecdefRouteHandler,
  postAccountsAccountOrderImpactRouteHandler,
  postAccountsAccountOrdersRouteHandler,
  postOauthAccessTokenRouteHandler,
  postOauthLiveSessionTokenRouteHandler,
  postOauthRequestTokenRouteHandler,
  putAccountsAccountOrdersCustomerOrderIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsAccountOrderImpactRoute, postAccountsAccountOrderImpactRouteHandler)
  .openapi(getAccountsAccountOrdersRoute, getAccountsAccountOrdersRouteHandler)
  .openapi(postAccountsAccountOrdersRoute, postAccountsAccountOrdersRouteHandler)
  .openapi(
    deleteAccountsAccountOrdersCustomerOrderIdRoute,
    deleteAccountsAccountOrdersCustomerOrderIdRouteHandler,
  )
  .openapi(
    getAccountsAccountOrdersCustomerOrderIdRoute,
    getAccountsAccountOrdersCustomerOrderIdRouteHandler,
  )
  .openapi(
    putAccountsAccountOrdersCustomerOrderIdRoute,
    putAccountsAccountOrdersCustomerOrderIdRouteHandler,
  )
  .openapi(getAccountsAccountPositionsRoute, getAccountsAccountPositionsRouteHandler)
  .openapi(getAccountsAccountSummaryRoute, getAccountsAccountSummaryRouteHandler)
  .openapi(getAccountsAccountTradesRoute, getAccountsAccountTradesRouteHandler)
  .openapi(getMarketdataExchangeComponentsRoute, getMarketdataExchangeComponentsRouteHandler)
  .openapi(getMarketdataSnapshotRoute, getMarketdataSnapshotRouteHandler)
  .openapi(postOauthAccessTokenRoute, postOauthAccessTokenRouteHandler)
  .openapi(postOauthLiveSessionTokenRoute, postOauthLiveSessionTokenRouteHandler)
  .openapi(postOauthRequestTokenRoute, postOauthRequestTokenRouteHandler)
  .openapi(getSecdefRoute, getSecdefRouteHandler)

export default app
