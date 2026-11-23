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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAnalyzePricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrders1137Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiProducts1137Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRegisterWoocommerceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRuleRuleData1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRuleRuleData1LatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeoRankingLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
