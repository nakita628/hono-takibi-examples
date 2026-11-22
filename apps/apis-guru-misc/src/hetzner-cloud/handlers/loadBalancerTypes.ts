import { OpenAPIHono } from '@hono/zod-openapi'
import { getLoadBalancerTypesIdRoute, getLoadBalancerTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const loadBalancerTypesHandler = app
  .openapi(getLoadBalancerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoadBalancerTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
