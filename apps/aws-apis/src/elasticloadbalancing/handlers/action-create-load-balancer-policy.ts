import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLoadBalancerPolicyRoute,
  postActionCreateLoadBalancerPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateLoadBalancerPolicyHandler = app
  .openapi(getActionCreateLoadBalancerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLoadBalancerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
