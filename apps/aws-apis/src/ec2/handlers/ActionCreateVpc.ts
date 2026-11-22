import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateVpcRoute, postActionCreateVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateVpcHandler = app
  .openapi(getActionCreateVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
