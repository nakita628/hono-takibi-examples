import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableAvailabilityZonesForLoadBalancerRoute,
  postActionEnableAvailabilityZonesForLoadBalancerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableAvailabilityZonesForLoadBalancerHandler = app
  .openapi(getActionEnableAvailabilityZonesForLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableAvailabilityZonesForLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
