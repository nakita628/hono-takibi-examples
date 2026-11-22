import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1BankTransactionRulesIdRoute,
  getApiV1BankTransactionRulesCreateRoute,
  getApiV1BankTransactionRulesIdEditRoute,
  getApiV1BankTransactionRulesIdRoute,
  getApiV1BankTransactionRulesRoute,
  postApiV1BankTransactionRulesBulkRoute,
  postApiV1BankTransactionRulesRoute,
  putApiV1BankTransactionRulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankTransactionRulesHandler = app
  .openapi(getApiV1BankTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BankTransactionRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BankTransactionRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionRulesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionRulesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionRulesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
