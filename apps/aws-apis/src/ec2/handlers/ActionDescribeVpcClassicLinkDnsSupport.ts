import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpcClassicLinkDnsSupportRoute,
  postActionDescribeVpcClassicLinkDnsSupportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcClassicLinkDnsSupportHandler = app
  .openapi(getActionDescribeVpcClassicLinkDnsSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcClassicLinkDnsSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
