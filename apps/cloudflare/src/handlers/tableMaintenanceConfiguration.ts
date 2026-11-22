import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsRoute,
  getAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceRunsRoute,
  getAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsRoute,
  getAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceRunsRoute,
  postAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsConfigurationTypeQueueRoute,
  postAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsRoute,
  postAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsConfigurationTypeQueueRoute,
  postAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tableMaintenanceConfigurationHandler = app
  .openapi(
    getAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsConfigurationTypeQueueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdBasinCatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceRunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceConfigsConfigurationTypeQueueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdR2CatalogBucketNameNamespacesNamespaceTablesTableNameMaintenanceRunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
