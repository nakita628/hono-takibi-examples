import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdRoute,
  deleteAccountsAccountIdImagesV2SourcingkitSourcesSourceIdRoute,
  getAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdLifecycleRoute,
  getAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdLogsRoute,
  getAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdRoute,
  getAccountsAccountIdImagesV2SourcingkitMigrationsRoute,
  getAccountsAccountIdImagesV2SourcingkitSourcesRoute,
  getAccountsAccountIdImagesV2SourcingkitSourcesSourceIdConnectivityRoute,
  getAccountsAccountIdImagesV2SourcingkitSourcesSourceIdRoute,
  patchAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdLifecycleAbortRoute,
  patchAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdLifecycleStartRoute,
  patchAccountsAccountIdImagesV2SourcingkitSourcesSourceIdRoute,
  postAccountsAccountIdImagesV2SourcingkitMigrationsRoute,
  postAccountsAccountIdImagesV2SourcingkitSourcesConnectivityPrecheckRoute,
  postAccountsAccountIdImagesV2SourcingkitSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareImagesSourcingKitHandler = app
  .openapi(getAccountsAccountIdImagesV2SourcingkitMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdImagesV2SourcingkitMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdLifecycleAbortRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdLifecycleStartRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdImagesV2SourcingkitMigrationsMigrationIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV2SourcingkitSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdImagesV2SourcingkitSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdImagesV2SourcingkitSourcesConnectivityPrecheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdImagesV2SourcingkitSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV2SourcingkitSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdImagesV2SourcingkitSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV2SourcingkitSourcesSourceIdConnectivityRoute, (c) => {
    throw new Error('Not implemented')
  })
