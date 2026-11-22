import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesRoute,
  getAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameRoute,
  getAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesRoute,
  getAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tableManagementHandler = app
  .openapi(getAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
