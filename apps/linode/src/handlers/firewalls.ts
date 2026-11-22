import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionNetworkingFirewallsFirewallIdRoute,
  getApiVersionLinodeInstancesLinodeIdFirewallsRoute,
  getApiVersionNetworkingFirewallsFirewallIdHistoryRoute,
  getApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionRoute,
  getApiVersionNetworkingFirewallsFirewallIdRoute,
  getApiVersionNetworkingFirewallsFirewallIdRulesRoute,
  getApiVersionNetworkingFirewallsRoute,
  getApiVersionNodebalancersNodeBalancerIdFirewallsRoute,
  postApiVersionLinodeInstancesLinodeIdFirewallsApplyRoute,
  postApiVersionNetworkingFirewallsRoute,
  putApiVersionLinodeInstancesLinodeIdFirewallsRoute,
  putApiVersionNetworkingFirewallsFirewallIdRoute,
  putApiVersionNetworkingFirewallsFirewallIdRulesRoute,
  putApiVersionNodebalancersNodeBalancerIdFirewallsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firewallsHandler = app
  .openapi(getApiVersionLinodeInstancesLinodeIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdFirewallsApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNetworkingFirewallsFirewallIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNodebalancersNodeBalancerIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
