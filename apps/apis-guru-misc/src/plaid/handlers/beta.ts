import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBetaCreditV1BankEmploymentGetRoute,
  postBetaTransactionsRulesV1CreateRoute,
  postBetaTransactionsRulesV1ListRoute,
  postBetaTransactionsRulesV1RemoveRoute,
  postBetaTransactionsV1EnhanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaHandler = app
  .openapi(postBetaCreditV1BankEmploymentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1CreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1ListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1RemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsV1EnhanceRoute, (c) => {
    throw new Error('Not implemented')
  })
