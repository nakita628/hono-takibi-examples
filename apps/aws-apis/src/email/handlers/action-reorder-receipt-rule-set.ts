import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionReorderReceiptRuleSetRoute,
  postActionReorderReceiptRuleSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionReorderReceiptRuleSetHandler = app
  .openapi(getActionReorderReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReorderReceiptRuleSetRoute, (c) => {
    throw new Error('Not implemented')
  })
