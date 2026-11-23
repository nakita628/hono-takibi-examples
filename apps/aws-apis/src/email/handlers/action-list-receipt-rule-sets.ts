import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListReceiptRuleSetsRoute, postActionListReceiptRuleSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListReceiptRuleSetsHandler = app
  .openapi(getActionListReceiptRuleSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListReceiptRuleSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
