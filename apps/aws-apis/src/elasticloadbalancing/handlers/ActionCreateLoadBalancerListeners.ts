import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLoadBalancerListenersRoute,
  postActionCreateLoadBalancerListenersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateLoadBalancerListenersHandler = app
  .openapi(getActionCreateLoadBalancerListenersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLoadBalancerListenersRoute, (c) => {
    throw new Error('Not implemented')
  })
