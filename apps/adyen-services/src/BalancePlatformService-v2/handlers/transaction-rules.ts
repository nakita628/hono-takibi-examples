import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransactionRulesTransactionRuleIdRoute,
  getTransactionRulesTransactionRuleIdRoute,
  patchTransactionRulesTransactionRuleIdRoute,
  postTransactionRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionRulesHandler = app
  .openapi(postTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionRulesTransactionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransactionRulesTransactionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTransactionRulesTransactionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
