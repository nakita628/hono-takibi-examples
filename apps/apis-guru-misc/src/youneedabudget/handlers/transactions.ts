import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBudgetsBudgetIdTransactionsTransactionIdRoute,
  getBudgetsBudgetIdAccountsAccountIdTransactionsRoute,
  getBudgetsBudgetIdCategoriesCategoryIdTransactionsRoute,
  getBudgetsBudgetIdPayeesPayeeIdTransactionsRoute,
  getBudgetsBudgetIdTransactionsRoute,
  getBudgetsBudgetIdTransactionsTransactionIdRoute,
  patchBudgetsBudgetIdTransactionsRoute,
  postBudgetsBudgetIdTransactionsImportRoute,
  postBudgetsBudgetIdTransactionsRoute,
  putBudgetsBudgetIdTransactionsTransactionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getBudgetsBudgetIdAccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdCategoriesCategoryIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeesPayeeIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBudgetsBudgetIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBudgetsBudgetIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBudgetsBudgetIdTransactionsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBudgetsBudgetIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBudgetsBudgetIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
