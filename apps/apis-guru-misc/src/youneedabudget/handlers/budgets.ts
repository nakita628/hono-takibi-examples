import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBudgetsBudgetIdTransactionsTransactionIdRoute,
  getBudgetsBudgetIdAccountsAccountIdRoute,
  getBudgetsBudgetIdAccountsAccountIdTransactionsRoute,
  getBudgetsBudgetIdAccountsRoute,
  getBudgetsBudgetIdCategoriesCategoryIdRoute,
  getBudgetsBudgetIdCategoriesCategoryIdTransactionsRoute,
  getBudgetsBudgetIdCategoriesRoute,
  getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute,
  getBudgetsBudgetIdMonthsMonthRoute,
  getBudgetsBudgetIdMonthsRoute,
  getBudgetsBudgetIdPayeeLocationsPayeeLocationIdRoute,
  getBudgetsBudgetIdPayeeLocationsRoute,
  getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsRoute,
  getBudgetsBudgetIdPayeesPayeeIdRoute,
  getBudgetsBudgetIdPayeesPayeeIdTransactionsRoute,
  getBudgetsBudgetIdPayeesRoute,
  getBudgetsBudgetIdRoute,
  getBudgetsBudgetIdScheduledTransactionsRoute,
  getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdRoute,
  getBudgetsBudgetIdSettingsRoute,
  getBudgetsBudgetIdTransactionsRoute,
  getBudgetsBudgetIdTransactionsTransactionIdRoute,
  getBudgetsRoute,
  patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute,
  patchBudgetsBudgetIdTransactionsRoute,
  postBudgetsBudgetIdAccountsRoute,
  postBudgetsBudgetIdTransactionsBulkRoute,
  postBudgetsBudgetIdTransactionsImportRoute,
  postBudgetsBudgetIdTransactionsRoute,
  putBudgetsBudgetIdTransactionsTransactionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const budgetsHandler = app
  .openapi(getBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBudgetsBudgetIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdAccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdCategoriesCategoryIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdMonthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdMonthsMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeeLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeeLocationsPayeeLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeesPayeeIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdScheduledTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdSettingsRoute, (c) => {
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
  .openapi(postBudgetsBudgetIdTransactionsBulkRoute, (c) => {
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
