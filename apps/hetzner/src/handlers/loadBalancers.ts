import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLoadBalancersIdRoute,
  getLoadBalancersIdMetricsRoute,
  getLoadBalancersIdRoute,
  getLoadBalancersRoute,
  postLoadBalancersRoute,
  putLoadBalancersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loadBalancersHandler = app
  .openapi(getLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoadBalancersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoadBalancersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoadBalancersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoadBalancersIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
