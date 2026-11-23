import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableVpcClassicLinkDnsSupportRoute,
  postActionEnableVpcClassicLinkDnsSupportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableVpcClassicLinkDnsSupportHandler = app
  .openapi(getActionEnableVpcClassicLinkDnsSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableVpcClassicLinkDnsSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
