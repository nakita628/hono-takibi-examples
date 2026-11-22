import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthAntiVirusRoute,
  getHealthCacheRoute,
  getHealthCertificateRoute,
  getHealthDbRoute,
  getHealthPubsubRoute,
  getHealthQueueBuildsRoute,
  getHealthQueueCertificatesRoute,
  getHealthQueueDatabasesRoute,
  getHealthQueueDeletesRoute,
  getHealthQueueFailedNameRoute,
  getHealthQueueFunctionsRoute,
  getHealthQueueLogsRoute,
  getHealthQueueMailsRoute,
  getHealthQueueMessagingRoute,
  getHealthQueueMigrationsRoute,
  getHealthQueueStatsResourcesRoute,
  getHealthQueueStatsUsageRoute,
  getHealthQueueWebhooksRoute,
  getHealthRoute,
  getHealthStorageLocalRoute,
  getHealthStorageRoute,
  getHealthTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthAntiVirusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthPubsubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueDeletesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueFailedNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueMailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueStatsResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueStatsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthQueueWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthStorageLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
