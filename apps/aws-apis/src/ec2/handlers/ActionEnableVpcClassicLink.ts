import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableVpcClassicLinkRoute, postActionEnableVpcClassicLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionEnableVpcClassicLinkHandler = app
  .openapi(getActionEnableVpcClassicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableVpcClassicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
