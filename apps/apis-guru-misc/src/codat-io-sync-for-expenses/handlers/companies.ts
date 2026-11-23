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
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCompaniesCompanyIdSyncExpensesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdSyncExpensesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdSyncExpensesDataExpenseTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSyncExpensesMappingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdSyncExpensesSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSyncExpensesSyncsLatestStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSyncExpensesSyncsListStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
