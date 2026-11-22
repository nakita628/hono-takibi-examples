import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetLoadBalancerPoliciesForBackendServerRoute,
  postActionSetLoadBalancerPoliciesForBackendServerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSetLoadBalancerPoliciesForBackendServerHandler = app
  .openapi(getActionSetLoadBalancerPoliciesForBackendServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetLoadBalancerPoliciesForBackendServerRoute, (c) => {
    throw new Error('Not implemented')
  })
