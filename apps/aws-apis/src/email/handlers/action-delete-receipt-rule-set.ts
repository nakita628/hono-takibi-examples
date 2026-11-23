import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteReceiptRuleSetRoute, postActionDeleteReceiptRuleSetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteReceiptRuleSetHandler = app
  .openapi(getActionDeleteReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
