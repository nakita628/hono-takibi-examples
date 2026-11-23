import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableVpcClassicLinkDnsSupportRoute,
  postActionDisableVpcClassicLinkDnsSupportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisableVpcClassicLinkDnsSupportHandler = app
  .openapi(getActionDisableVpcClassicLinkDnsSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableVpcClassicLinkDnsSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
