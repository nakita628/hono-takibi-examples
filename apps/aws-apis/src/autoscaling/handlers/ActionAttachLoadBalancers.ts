import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachLoadBalancersRoute, postActionAttachLoadBalancersRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAttachLoadBalancersHandler = app
  .openapi(getActionAttachLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
