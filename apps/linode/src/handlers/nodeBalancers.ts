import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionNodebalancersNodeBalancerIdRoute,
  getApiVersionLinodeInstancesLinodeIdNodebalancersRoute,
  getApiVersionNodebalancersNodeBalancerIdRoute,
  getApiVersionNodebalancersRoute,
  postApiVersionNodebalancersRoute,
  putApiVersionNodebalancersNodeBalancerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeBalancersHandler = app
  .openapi(getApiVersionLinodeInstancesLinodeIdNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
