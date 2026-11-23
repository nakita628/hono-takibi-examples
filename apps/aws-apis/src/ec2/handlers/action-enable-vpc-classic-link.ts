import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableVpcClassicLinkRoute, postActionEnableVpcClassicLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const actionEnableVpcClassicLinkHandler = app
  .openapi(getActionEnableVpcClassicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableVpcClassicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
