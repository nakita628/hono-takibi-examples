import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyLoadBalancerAttributesRoute,
  postActionModifyLoadBalancerAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyLoadBalancerAttributesHandler = app
  .openapi(getActionModifyLoadBalancerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyLoadBalancerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
