import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeregisterInstancesFromLoadBalancerRoute,
  postActionDeregisterInstancesFromLoadBalancerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeregisterInstancesFromLoadBalancerHandler = app
  .openapi(getActionDeregisterInstancesFromLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterInstancesFromLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
