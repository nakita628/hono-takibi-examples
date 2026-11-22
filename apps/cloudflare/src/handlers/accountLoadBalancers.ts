import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute,
  deleteAccountsAccountIdLoadBalancersLoadBalancerIdRoute,
  getAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute,
  getAccountOrZoneAccountOrZoneIdLoadBalancersRoute,
  getAccountsAccountIdLoadBalancersLoadBalancerIdRoute,
  getAccountsAccountIdLoadBalancersRoute,
  getAccountsAccountIdLoadBalancersUsageRoute,
  patchAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute,
  patchAccountsAccountIdLoadBalancersLoadBalancerIdRoute,
  postAccountOrZoneAccountOrZoneIdLoadBalancersRoute,
  postAccountsAccountIdLoadBalancersRoute,
  putAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute,
  putAccountsAccountIdLoadBalancersLoadBalancerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountLoadBalancersHandler = app
  .openapi(getAccountsAccountIdLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
