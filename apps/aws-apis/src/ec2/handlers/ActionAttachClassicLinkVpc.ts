import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachClassicLinkVpcRoute, postActionAttachClassicLinkVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAttachClassicLinkVpcHandler = app
  .openapi(getActionAttachClassicLinkVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachClassicLinkVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
