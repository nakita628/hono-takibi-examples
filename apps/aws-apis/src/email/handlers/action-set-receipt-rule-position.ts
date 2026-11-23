import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetReceiptRulePositionRoute,
  postActionSetReceiptRulePositionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetReceiptRulePositionHandler = app
  .openapi(getActionSetReceiptRulePositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetReceiptRulePositionRoute, (c) => {
    throw new Error('Not implemented')
  })
