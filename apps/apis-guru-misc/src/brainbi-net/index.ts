import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiOrders1137Route,
  deleteApiProducts1137Route,
  getApiAnalyzePricingRoute,
  getApiCustomersRoute,
  getApiOrdersRoute,
  getApiProductsRoute,
  getApiRuleRoute,
  getApiRuleRuleData1LatestRoute,
  getApiRuleRuleData1Route,
  getApiSeoRankingLatestRoute,
  postApiLoginRoute,
  postApiLogoutRoute,
  postApiRegisterRoute,
  postApiRegisterWoocommerceRoute,
} from './routes'
import {
  deleteApiOrders1137RouteHandler,
  deleteApiProducts1137RouteHandler,
  getApiAnalyzePricingRouteHandler,
  getApiCustomersRouteHandler,
  getApiOrdersRouteHandler,
  getApiProductsRouteHandler,
  getApiRuleRouteHandler,
  getApiRuleRuleData1LatestRouteHandler,
  getApiRuleRuleData1RouteHandler,
  getApiSeoRankingLatestRouteHandler,
  postApiLoginRouteHandler,
  postApiLogoutRouteHandler,
  postApiRegisterRouteHandler,
  postApiRegisterWoocommerceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAnalyzePricingRoute, getApiAnalyzePricingRouteHandler)
  .openapi(getApiCustomersRoute, getApiCustomersRouteHandler)
  .openapi(postApiLoginRoute, postApiLoginRouteHandler)
  .openapi(postApiLogoutRoute, postApiLogoutRouteHandler)
  .openapi(getApiOrdersRoute, getApiOrdersRouteHandler)
  .openapi(deleteApiOrders1137Route, deleteApiOrders1137RouteHandler)
  .openapi(getApiProductsRoute, getApiProductsRouteHandler)
  .openapi(deleteApiProducts1137Route, deleteApiProducts1137RouteHandler)
  .openapi(postApiRegisterRoute, postApiRegisterRouteHandler)
  .openapi(postApiRegisterWoocommerceRoute, postApiRegisterWoocommerceRouteHandler)
  .openapi(getApiRuleRoute, getApiRuleRouteHandler)
  .openapi(getApiRuleRuleData1Route, getApiRuleRuleData1RouteHandler)
  .openapi(getApiRuleRuleData1LatestRoute, getApiRuleRuleData1LatestRouteHandler)
  .openapi(getApiSeoRankingLatestRoute, getApiSeoRankingLatestRouteHandler)

export default app
