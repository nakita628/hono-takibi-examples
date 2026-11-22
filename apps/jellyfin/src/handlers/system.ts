import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetUtcTimeRoute,
  getSystemActivityLogEntriesRoute,
  getSystemConfigurationKeyRoute,
  getSystemConfigurationMetadataOptionsDefaultRoute,
  getSystemConfigurationRoute,
  getSystemEndpointRoute,
  getSystemInfoPublicRoute,
  getSystemInfoRoute,
  getSystemInfoStorageRoute,
  getSystemLogsLogRoute,
  getSystemLogsRoute,
  getSystemPingRoute,
  postClientLogDocumentRoute,
  postSystemConfigurationBrandingRoute,
  postSystemConfigurationKeyRoute,
  postSystemConfigurationRoute,
  postSystemPingRoute,
  postSystemRestartRoute,
  postSystemShutdownRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getSystemActivityLogEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientLogDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConfigurationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemConfigurationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemConfigurationBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConfigurationMetadataOptionsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemInfoPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemInfoStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemLogsLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetUtcTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
