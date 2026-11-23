import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyRuleRoute, postActionModifyRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyRuleHandler = app
  .openapi(getActionModifyRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
