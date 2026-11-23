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
  getUserRoute,
  patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute,
  patchBudgetsBudgetIdTransactionsRoute,
  postBudgetsBudgetIdAccountsRoute,
  postBudgetsBudgetIdTransactionsBulkRoute,
  postBudgetsBudgetIdTransactionsImportRoute,
  postBudgetsBudgetIdTransactionsRoute,
  putBudgetsBudgetIdTransactionsTransactionIdRoute,
} from './routes'
import {
  deleteBudgetsBudgetIdTransactionsTransactionIdRouteHandler,
  getBudgetsBudgetIdAccountsAccountIdRouteHandler,
  getBudgetsBudgetIdAccountsAccountIdTransactionsRouteHandler,
  getBudgetsBudgetIdAccountsRouteHandler,
  getBudgetsBudgetIdCategoriesCategoryIdRouteHandler,
  getBudgetsBudgetIdCategoriesCategoryIdTransactionsRouteHandler,
  getBudgetsBudgetIdCategoriesRouteHandler,
  getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRouteHandler,
  getBudgetsBudgetIdMonthsMonthRouteHandler,
  getBudgetsBudgetIdMonthsRouteHandler,
  getBudgetsBudgetIdPayeeLocationsPayeeLocationIdRouteHandler,
  getBudgetsBudgetIdPayeeLocationsRouteHandler,
  getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsRouteHandler,
  getBudgetsBudgetIdPayeesPayeeIdRouteHandler,
  getBudgetsBudgetIdPayeesPayeeIdTransactionsRouteHandler,
  getBudgetsBudgetIdPayeesRouteHandler,
  getBudgetsBudgetIdRouteHandler,
  getBudgetsBudgetIdScheduledTransactionsRouteHandler,
  getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdRouteHandler,
  getBudgetsBudgetIdSettingsRouteHandler,
  getBudgetsBudgetIdTransactionsRouteHandler,
  getBudgetsBudgetIdTransactionsTransactionIdRouteHandler,
  getBudgetsRouteHandler,
  getUserRouteHandler,
  patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRouteHandler,
  patchBudgetsBudgetIdTransactionsRouteHandler,
  postBudgetsBudgetIdAccountsRouteHandler,
  postBudgetsBudgetIdTransactionsBulkRouteHandler,
  postBudgetsBudgetIdTransactionsImportRouteHandler,
  postBudgetsBudgetIdTransactionsRouteHandler,
  putBudgetsBudgetIdTransactionsTransactionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBudgetsRoute, getBudgetsRouteHandler)
  .openapi(getBudgetsBudgetIdRoute, getBudgetsBudgetIdRouteHandler)
  .openapi(getBudgetsBudgetIdAccountsRoute, getBudgetsBudgetIdAccountsRouteHandler)
  .openapi(postBudgetsBudgetIdAccountsRoute, postBudgetsBudgetIdAccountsRouteHandler)
  .openapi(
    getBudgetsBudgetIdAccountsAccountIdRoute,
    getBudgetsBudgetIdAccountsAccountIdRouteHandler,
  )
  .openapi(
    getBudgetsBudgetIdAccountsAccountIdTransactionsRoute,
    getBudgetsBudgetIdAccountsAccountIdTransactionsRouteHandler,
  )
  .openapi(getBudgetsBudgetIdCategoriesRoute, getBudgetsBudgetIdCategoriesRouteHandler)
  .openapi(
    getBudgetsBudgetIdCategoriesCategoryIdRoute,
    getBudgetsBudgetIdCategoriesCategoryIdRouteHandler,
  )
  .openapi(
    getBudgetsBudgetIdCategoriesCategoryIdTransactionsRoute,
    getBudgetsBudgetIdCategoriesCategoryIdTransactionsRouteHandler,
  )
  .openapi(getBudgetsBudgetIdMonthsRoute, getBudgetsBudgetIdMonthsRouteHandler)
  .openapi(getBudgetsBudgetIdMonthsMonthRoute, getBudgetsBudgetIdMonthsMonthRouteHandler)
  .openapi(
    getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute,
    getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRouteHandler,
  )
  .openapi(
    patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRoute,
    patchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdRouteHandler,
  )
  .openapi(getBudgetsBudgetIdPayeeLocationsRoute, getBudgetsBudgetIdPayeeLocationsRouteHandler)
  .openapi(
    getBudgetsBudgetIdPayeeLocationsPayeeLocationIdRoute,
    getBudgetsBudgetIdPayeeLocationsPayeeLocationIdRouteHandler,
  )
  .openapi(getBudgetsBudgetIdPayeesRoute, getBudgetsBudgetIdPayeesRouteHandler)
  .openapi(getBudgetsBudgetIdPayeesPayeeIdRoute, getBudgetsBudgetIdPayeesPayeeIdRouteHandler)
  .openapi(
    getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsRoute,
    getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsRouteHandler,
  )
  .openapi(
    getBudgetsBudgetIdPayeesPayeeIdTransactionsRoute,
    getBudgetsBudgetIdPayeesPayeeIdTransactionsRouteHandler,
  )
  .openapi(
    getBudgetsBudgetIdScheduledTransactionsRoute,
    getBudgetsBudgetIdScheduledTransactionsRouteHandler,
  )
  .openapi(
    getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdRoute,
    getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdRouteHandler,
  )
  .openapi(getBudgetsBudgetIdSettingsRoute, getBudgetsBudgetIdSettingsRouteHandler)
  .openapi(getBudgetsBudgetIdTransactionsRoute, getBudgetsBudgetIdTransactionsRouteHandler)
  .openapi(patchBudgetsBudgetIdTransactionsRoute, patchBudgetsBudgetIdTransactionsRouteHandler)
  .openapi(postBudgetsBudgetIdTransactionsRoute, postBudgetsBudgetIdTransactionsRouteHandler)
  .openapi(
    postBudgetsBudgetIdTransactionsBulkRoute,
    postBudgetsBudgetIdTransactionsBulkRouteHandler,
  )
  .openapi(
    postBudgetsBudgetIdTransactionsImportRoute,
    postBudgetsBudgetIdTransactionsImportRouteHandler,
  )
  .openapi(
    deleteBudgetsBudgetIdTransactionsTransactionIdRoute,
    deleteBudgetsBudgetIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(
    getBudgetsBudgetIdTransactionsTransactionIdRoute,
    getBudgetsBudgetIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(
    putBudgetsBudgetIdTransactionsTransactionIdRoute,
    putBudgetsBudgetIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(getUserRoute, getUserRouteHandler)

export default app
