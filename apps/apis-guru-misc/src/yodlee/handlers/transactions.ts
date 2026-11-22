import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransactionsCategoriesCategoryIdRoute,
  deleteTransactionsCategoriesRulesRuleIdRoute,
  getTransactionsCategoriesRoute,
  getTransactionsCategoriesRulesRoute,
  getTransactionsCategoriesTxnRulesRoute,
  getTransactionsCountRoute,
  getTransactionsRoute,
  postTransactionsCategoriesRoute,
  postTransactionsCategoriesRulesRoute,
  postTransactionsCategoriesRulesRuleIdRoute,
  putTransactionsCategoriesRoute,
  putTransactionsCategoriesRulesRuleIdRoute,
  putTransactionsTransactionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransactionsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsCategoriesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsCategoriesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransactionsCategoriesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsCategoriesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransactionsCategoriesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsCategoriesTxnRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransactionsCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
