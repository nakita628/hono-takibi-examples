import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdLoadBalancersRegionsRegionIdRoute,
  getAccountsAccountIdLoadBalancersRegionsRoute,
  getUserLoadBalancersRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loadBalancerRegionsHandler = app
  .openapi(getAccountsAccountIdLoadBalancersRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLoadBalancersRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
