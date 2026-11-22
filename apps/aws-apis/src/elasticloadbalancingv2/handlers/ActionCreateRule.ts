import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateRuleRoute, postActionCreateRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateRuleHandler = app
  .openapi(getActionCreateRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
