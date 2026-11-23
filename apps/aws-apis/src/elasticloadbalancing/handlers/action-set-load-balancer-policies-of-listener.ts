import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetLoadBalancerPoliciesOfListenerRoute,
  postActionSetLoadBalancerPoliciesOfListenerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetLoadBalancerPoliciesOfListenerHandler = app
  .openapi(getActionSetLoadBalancerPoliciesOfListenerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetLoadBalancerPoliciesOfListenerRoute, (c) => {
    throw new Error('Not implemented')
  })
