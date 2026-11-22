import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReceiptRuleSetRoute,
  postActionDescribeReceiptRuleSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeReceiptRuleSetHandler = app
  .openapi(getActionDescribeReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
