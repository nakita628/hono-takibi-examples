import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexRoute,
  getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexRoute,
  getApiV3AccountsAccountIdMigrationInventorySummaryIndexRoute,
  postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexRoute,
  postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const migrationInventoryHandler = app
  .openapi(
    postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdMigrationInventorySummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
