import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionApplySecurityGroupsToLoadBalancerRoute,
  postActionApplySecurityGroupsToLoadBalancerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionApplySecurityGroupsToLoadBalancerHandler = app
  .openapi(getActionApplySecurityGroupsToLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionApplySecurityGroupsToLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
