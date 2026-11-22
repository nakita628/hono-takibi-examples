import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserLoadBalancersPoolsPoolIdRoute,
  getUserLoadBalancersPoolsPoolIdHealthRoute,
  getUserLoadBalancersPoolsPoolIdReferencesRoute,
  getUserLoadBalancersPoolsPoolIdRoute,
  getUserLoadBalancersPoolsRoute,
  patchUserLoadBalancersPoolsPoolIdRoute,
  patchUserLoadBalancersPoolsRoute,
  postUserLoadBalancersPoolsPoolIdPreviewRoute,
  postUserLoadBalancersPoolsRoute,
  putUserLoadBalancersPoolsPoolIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loadBalancerPoolsHandler = app
  .openapi(getUserLoadBalancersPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserLoadBalancersPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserLoadBalancersPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserLoadBalancersPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLoadBalancersPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserLoadBalancersPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserLoadBalancersPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLoadBalancersPoolsPoolIdHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserLoadBalancersPoolsPoolIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLoadBalancersPoolsPoolIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
