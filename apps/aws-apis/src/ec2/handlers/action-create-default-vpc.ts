import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDefaultVpcRoute, postActionCreateDefaultVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateDefaultVpcHandler = app
  .openapi(getActionCreateDefaultVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDefaultVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
