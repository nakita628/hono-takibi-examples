import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClientVpnAuthorizationRulesRoute,
  postActionDescribeClientVpnAuthorizationRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClientVpnAuthorizationRulesHandler = app
  .openapi(getActionDescribeClientVpnAuthorizationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClientVpnAuthorizationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
