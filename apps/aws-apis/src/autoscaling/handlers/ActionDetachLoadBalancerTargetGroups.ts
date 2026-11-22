import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDetachLoadBalancerTargetGroupsRoute,
  postActionDetachLoadBalancerTargetGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDetachLoadBalancerTargetGroupsHandler = app
  .openapi(getActionDetachLoadBalancerTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachLoadBalancerTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
