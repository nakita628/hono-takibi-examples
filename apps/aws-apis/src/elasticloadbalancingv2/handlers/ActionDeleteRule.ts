import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteRuleRoute, postActionDeleteRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteRuleHandler = app
  .openapi(getActionDeleteRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
