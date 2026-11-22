import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableAvailabilityZonesForLoadBalancerRoute,
  postActionDisableAvailabilityZonesForLoadBalancerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisableAvailabilityZonesForLoadBalancerHandler = app
  .openapi(getActionDisableAvailabilityZonesForLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableAvailabilityZonesForLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
