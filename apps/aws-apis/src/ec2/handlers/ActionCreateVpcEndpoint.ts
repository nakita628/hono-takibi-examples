import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateVpcEndpointRoute, postActionCreateVpcEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateVpcEndpointHandler = app
  .openapi(getActionCreateVpcEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVpcEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
