import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClientVpnRoutesRoute,
  postActionDescribeClientVpnRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeClientVpnRoutesHandler = app
  .openapi(getActionDescribeClientVpnRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClientVpnRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
