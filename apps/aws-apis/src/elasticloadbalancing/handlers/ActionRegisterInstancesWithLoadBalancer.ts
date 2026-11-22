import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRegisterInstancesWithLoadBalancerRoute,
  postActionRegisterInstancesWithLoadBalancerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRegisterInstancesWithLoadBalancerHandler = app
  .openapi(getActionRegisterInstancesWithLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterInstancesWithLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
