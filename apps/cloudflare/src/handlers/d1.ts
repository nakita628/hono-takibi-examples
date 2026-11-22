import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdD1DatabaseDatabaseIdRoute,
  getAccountsAccountIdD1DatabaseDatabaseIdRoute,
  getAccountsAccountIdD1DatabaseDatabaseIdTimeTravelBookmarkRoute,
  getAccountsAccountIdD1DatabaseRoute,
  getAccountsAccountIdD1InsightsDatabasesRoute,
  getAccountsAccountIdD1InsightsQueriesRoute,
  patchAccountsAccountIdD1DatabaseDatabaseIdRoute,
  postAccountsAccountIdD1DatabaseDatabaseIdExportRoute,
  postAccountsAccountIdD1DatabaseDatabaseIdImportRoute,
  postAccountsAccountIdD1DatabaseDatabaseIdQueryRoute,
  postAccountsAccountIdD1DatabaseDatabaseIdRawRoute,
  postAccountsAccountIdD1DatabaseDatabaseIdTimeTravelRestoreRoute,
  postAccountsAccountIdD1DatabaseDatabaseIdUndeleteRoute,
  postAccountsAccountIdD1DatabaseRoute,
  putAccountsAccountIdD1DatabaseDatabaseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const d1Handler = app
  .openapi(getAccountsAccountIdD1DatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdD1DatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdD1DatabaseDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdD1DatabaseDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdD1DatabaseDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdD1DatabaseDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdD1DatabaseDatabaseIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdD1DatabaseDatabaseIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdD1DatabaseDatabaseIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdD1DatabaseDatabaseIdRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdD1DatabaseDatabaseIdTimeTravelBookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdD1DatabaseDatabaseIdTimeTravelRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdD1DatabaseDatabaseIdUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdD1InsightsDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdD1InsightsQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
