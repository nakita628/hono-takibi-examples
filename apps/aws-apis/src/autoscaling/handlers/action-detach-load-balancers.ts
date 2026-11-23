import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachLoadBalancersRoute, postActionDetachLoadBalancersRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDetachLoadBalancersHandler = app
  .openapi(getActionDetachLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
