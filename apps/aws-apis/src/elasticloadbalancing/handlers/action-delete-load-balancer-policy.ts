import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteLoadBalancerPolicyRoute,
  postActionDeleteLoadBalancerPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteLoadBalancerPolicyHandler = app
  .openapi(getActionDeleteLoadBalancerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLoadBalancerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
