import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateReceiptRuleRoute, postActionCreateReceiptRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateReceiptRuleHandler = app
  .openapi(getActionCreateReceiptRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateReceiptRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
