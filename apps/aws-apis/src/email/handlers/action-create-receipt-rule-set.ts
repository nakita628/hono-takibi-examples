import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateReceiptRuleSetRoute, postActionCreateReceiptRuleSetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateReceiptRuleSetHandler = app
  .openapi(getActionCreateReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
