import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdSyncExpensesConfigRoute,
  getCompaniesCompanyIdSyncExpensesMappingOptionsRoute,
  getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusRoute,
  getCompaniesCompanyIdSyncExpensesSyncsLatestStatusRoute,
  getCompaniesCompanyIdSyncExpensesSyncsListStatusRoute,
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusRoute,
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsRoute,
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdRoute,
  postCompaniesCompanyIdSyncExpensesConfigRoute,
  postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseRoute,
  postCompaniesCompanyIdSyncExpensesDataExpenseTransactionsRoute,
  postCompaniesCompanyIdSyncExpensesSyncsRoute,
  postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsRoute,
} from './routes'
import {
  getCompaniesCompanyIdSyncExpensesConfigRouteHandler,
  getCompaniesCompanyIdSyncExpensesMappingOptionsRouteHandler,
  getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusRouteHandler,
  getCompaniesCompanyIdSyncExpensesSyncsLatestStatusRouteHandler,
  getCompaniesCompanyIdSyncExpensesSyncsListStatusRouteHandler,
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusRouteHandler,
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsRouteHandler,
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdRouteHandler,
  postCompaniesCompanyIdSyncExpensesConfigRouteHandler,
  postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseRouteHandler,
  postCompaniesCompanyIdSyncExpensesDataExpenseTransactionsRouteHandler,
  postCompaniesCompanyIdSyncExpensesSyncsRouteHandler,
  postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCompaniesCompanyIdSyncExpensesConfigRoute,
    getCompaniesCompanyIdSyncExpensesConfigRouteHandler,
  )
  .openapi(
    postCompaniesCompanyIdSyncExpensesConfigRoute,
    postCompaniesCompanyIdSyncExpensesConfigRouteHandler,
  )
  .openapi(
    postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseRoute,
    postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseRouteHandler,
  )
  .openapi(
    postCompaniesCompanyIdSyncExpensesDataExpenseTransactionsRoute,
    postCompaniesCompanyIdSyncExpensesDataExpenseTransactionsRouteHandler,
  )
  .openapi(
    getCompaniesCompanyIdSyncExpensesMappingOptionsRoute,
    getCompaniesCompanyIdSyncExpensesMappingOptionsRouteHandler,
  )
  .openapi(
    postCompaniesCompanyIdSyncExpensesSyncsRoute,
    postCompaniesCompanyIdSyncExpensesSyncsRouteHandler,
  )
  .openapi(
    getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusRoute,
    getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusRouteHandler,
  )
  .openapi(
    getCompaniesCompanyIdSyncExpensesSyncsLatestStatusRoute,
    getCompaniesCompanyIdSyncExpensesSyncsLatestStatusRouteHandler,
  )
  .openapi(
    getCompaniesCompanyIdSyncExpensesSyncsListStatusRoute,
    getCompaniesCompanyIdSyncExpensesSyncsListStatusRouteHandler,
  )
  .openapi(
    getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusRoute,
    getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusRouteHandler,
  )
  .openapi(
    getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsRoute,
    getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsRouteHandler,
  )
  .openapi(
    getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdRoute,
    getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(
    postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsRoute,
    postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsRouteHandler,
  )

export default app
