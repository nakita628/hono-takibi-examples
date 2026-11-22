import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateReceiptRuleRoute, postActionUpdateReceiptRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateReceiptRuleHandler = app
  .openapi(getActionUpdateReceiptRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateReceiptRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
