import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteReceiptRuleSetRoute, postActionDeleteReceiptRuleSetRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteReceiptRuleSetHandler = app
  .openapi(getActionDeleteReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
