import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAttachLoadBalancerTargetGroupsRoute,
  postActionAttachLoadBalancerTargetGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAttachLoadBalancerTargetGroupsHandler = app
  .openapi(getActionAttachLoadBalancerTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachLoadBalancerTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
