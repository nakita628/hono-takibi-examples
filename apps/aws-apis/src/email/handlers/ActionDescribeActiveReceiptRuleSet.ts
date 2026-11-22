import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeActiveReceiptRuleSetRoute,
  postActionDescribeActiveReceiptRuleSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeActiveReceiptRuleSetHandler = app
  .openapi(getActionDescribeActiveReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeActiveReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
