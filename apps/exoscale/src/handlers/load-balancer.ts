import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLoadBalancerIdFieldRoute,
  deleteLoadBalancerIdRoute,
  deleteLoadBalancerIdServiceServiceIdFieldRoute,
  deleteLoadBalancerIdServiceServiceIdRoute,
  getLoadBalancerIdRoute,
  getLoadBalancerIdServiceServiceIdRoute,
  getLoadBalancerRoute,
  postLoadBalancerIdServiceRoute,
  postLoadBalancerRoute,
  putLoadBalancerIdRoute,
  putLoadBalancerIdServiceServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loadBalancerHandler = app
  .openapi(deleteLoadBalancerIdServiceServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoadBalancerIdServiceServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoadBalancerIdServiceServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoadBalancerIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoadBalancerIdServiceServiceIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancerIdServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
