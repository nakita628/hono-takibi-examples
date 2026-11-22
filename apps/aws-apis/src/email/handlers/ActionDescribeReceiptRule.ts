import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeReceiptRuleRoute, postActionDescribeReceiptRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeReceiptRuleHandler = app
  .openapi(getActionDescribeReceiptRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReceiptRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
