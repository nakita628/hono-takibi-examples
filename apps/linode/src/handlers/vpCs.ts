import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionVpcsVpcIdRoute,
  getApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdRoute,
  getApiVersionNodebalancersNodeBalancerIdVpcsRoute,
  getApiVersionVpcsRoute,
  getApiVersionVpcsVpcIdRoute,
  postApiVersionVpcsRoute,
  putApiVersionVpcsVpcIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpCsHandler = app
  .openapi(getApiVersionNodebalancersNodeBalancerIdVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionVpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionVpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
