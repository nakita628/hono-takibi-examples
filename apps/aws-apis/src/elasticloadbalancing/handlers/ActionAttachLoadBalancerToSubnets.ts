import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAttachLoadBalancerToSubnetsRoute,
  postActionAttachLoadBalancerToSubnetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAttachLoadBalancerToSubnetsHandler = app
  .openapi(getActionAttachLoadBalancerToSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachLoadBalancerToSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
