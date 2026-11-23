import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCloneReceiptRuleSetRoute, postActionCloneReceiptRuleSetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCloneReceiptRuleSetHandler = app
  .openapi(getActionCloneReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCloneReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
