import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteVpcEndpointsRoute, postActionDeleteVpcEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteVpcEndpointsHandler = app
  .openapi(getActionDeleteVpcEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpcEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
