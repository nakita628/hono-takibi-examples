import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClientVpnAuthorizationRulesRoute,
  postActionDescribeClientVpnAuthorizationRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeClientVpnAuthorizationRulesHandler = app
  .openapi(getActionDescribeClientVpnAuthorizationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClientVpnAuthorizationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
