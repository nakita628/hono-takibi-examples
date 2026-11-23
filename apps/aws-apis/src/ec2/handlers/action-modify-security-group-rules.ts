import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifySecurityGroupRulesRoute,
  postActionModifySecurityGroupRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifySecurityGroupRulesHandler = app
  .openapi(getActionModifySecurityGroupRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifySecurityGroupRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
