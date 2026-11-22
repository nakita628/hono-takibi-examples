import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdLoadBalancersPoolsPoolIdRoute,
  getAccountsAccountIdLoadBalancersPoolsPoolIdHealthRoute,
  getAccountsAccountIdLoadBalancersPoolsPoolIdReferencesRoute,
  getAccountsAccountIdLoadBalancersPoolsPoolIdRoute,
  getAccountsAccountIdLoadBalancersPoolsRoute,
  patchAccountsAccountIdLoadBalancersPoolsPoolIdRoute,
  patchAccountsAccountIdLoadBalancersPoolsRoute,
  postAccountsAccountIdLoadBalancersPoolsPoolIdPreviewRoute,
  postAccountsAccountIdLoadBalancersPoolsRoute,
  putAccountsAccountIdLoadBalancersPoolsPoolIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountLoadBalancerPoolsHandler = app
  .openapi(getAccountsAccountIdLoadBalancersPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLoadBalancersPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLoadBalancersPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLoadBalancersPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLoadBalancersPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdLoadBalancersPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersPoolsPoolIdHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLoadBalancersPoolsPoolIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLoadBalancersPoolsPoolIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
