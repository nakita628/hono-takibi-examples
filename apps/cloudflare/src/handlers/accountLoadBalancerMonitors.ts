import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdLoadBalancersMonitorsMonitorIdRoute,
  getAccountsAccountIdLoadBalancersMonitorsMonitorIdReferencesRoute,
  getAccountsAccountIdLoadBalancersMonitorsMonitorIdRoute,
  getAccountsAccountIdLoadBalancersMonitorsRoute,
  getAccountsAccountIdLoadBalancersPreviewPreviewIdRoute,
  patchAccountsAccountIdLoadBalancersMonitorsMonitorIdRoute,
  postAccountsAccountIdLoadBalancersMonitorsMonitorIdPreviewRoute,
  postAccountsAccountIdLoadBalancersMonitorsRoute,
  putAccountsAccountIdLoadBalancersMonitorsMonitorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountLoadBalancerMonitorsHandler = app
  .openapi(getAccountsAccountIdLoadBalancersMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLoadBalancersMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLoadBalancersMonitorsMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersMonitorsMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLoadBalancersMonitorsMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdLoadBalancersMonitorsMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLoadBalancersMonitorsMonitorIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersMonitorsMonitorIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersPreviewPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
