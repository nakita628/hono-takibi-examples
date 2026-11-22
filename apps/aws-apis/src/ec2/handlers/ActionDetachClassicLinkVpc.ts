import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachClassicLinkVpcRoute, postActionDetachClassicLinkVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDetachClassicLinkVpcHandler = app
  .openapi(getActionDetachClassicLinkVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachClassicLinkVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
