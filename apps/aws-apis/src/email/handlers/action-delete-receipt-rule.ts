import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteReceiptRuleRoute, postActionDeleteReceiptRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteReceiptRuleHandler = app
  .openapi(getActionDeleteReceiptRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteReceiptRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
