import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyVpcEndpointRoute, postActionModifyVpcEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyVpcEndpointHandler = app
  .openapi(getActionModifyVpcEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpcEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
