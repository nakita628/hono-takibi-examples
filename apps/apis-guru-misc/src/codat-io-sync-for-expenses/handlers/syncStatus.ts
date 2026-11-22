import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusRoute,
  getCompaniesCompanyIdSyncExpensesSyncsLatestStatusRoute,
  getCompaniesCompanyIdSyncExpensesSyncsListStatusRoute,
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncStatusHandler = app
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
