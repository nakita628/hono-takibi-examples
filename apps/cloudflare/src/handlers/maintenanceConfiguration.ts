import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBasinCatalogBucketNameMaintenanceConfigsRoute,
  getAccountsAccountIdR2CatalogBucketNameMaintenanceConfigsRoute,
  postAccountsAccountIdBasinCatalogBucketNameMaintenanceConfigsRoute,
  postAccountsAccountIdR2CatalogBucketNameMaintenanceConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const maintenanceConfigurationHandler = app
  .openapi(getAccountsAccountIdBasinCatalogBucketNameMaintenanceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBasinCatalogBucketNameMaintenanceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdR2CatalogBucketNameMaintenanceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdR2CatalogBucketNameMaintenanceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
