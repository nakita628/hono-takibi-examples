import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableAvailabilityZonesForLoadBalancerRoute,
  postActionEnableAvailabilityZonesForLoadBalancerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionEnableAvailabilityZonesForLoadBalancerHandler = app
  .openapi(getActionEnableAvailabilityZonesForLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableAvailabilityZonesForLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
