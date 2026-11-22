import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpcClassicLinkRoute,
  postActionDescribeVpcClassicLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcClassicLinkHandler = app
  .openapi(getActionDescribeVpcClassicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcClassicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
