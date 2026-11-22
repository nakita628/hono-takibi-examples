import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteLoadBalancerListenersRoute,
  postActionDeleteLoadBalancerListenersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteLoadBalancerListenersHandler = app
  .openapi(getActionDeleteLoadBalancerListenersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLoadBalancerListenersRoute, (c) => {
    throw new Error('Not implemented')
  })
