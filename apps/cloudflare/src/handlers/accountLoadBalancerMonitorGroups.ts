import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdRoute,
  getAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdReferencesRoute,
  getAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdRoute,
  getAccountsAccountIdLoadBalancersMonitorGroupsRoute,
  patchAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdRoute,
  postAccountsAccountIdLoadBalancersMonitorGroupsRoute,
  putAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountLoadBalancerMonitorGroupsHandler = app
  .openapi(getAccountsAccountIdLoadBalancersMonitorGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLoadBalancersMonitorGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersMonitorGroupsMonitorGroupIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
