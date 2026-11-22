import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  getApiVersionNodebalancersNodeBalancerIdConfigsRoute,
  postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute,
  postApiVersionNodebalancersNodeBalancerIdConfigsRoute,
  putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationsHandler = app
  .openapi(postApiVersionNodebalancersNodeBalancerIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute, (c) => {
    throw new Error('Not implemented')
  })
