import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetActiveReceiptRuleSetRoute,
  postActionSetActiveReceiptRuleSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSetActiveReceiptRuleSetHandler = app
  .openapi(getActionSetActiveReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetActiveReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
