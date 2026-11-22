import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postWebhookExampleAlarmRoute,
  postWebhookExampleAssetRawRoute,
  postWebhookExampleAuditRoute,
  postWebhookExampleClientJoinRoute,
  postWebhookExampleClientSessionsRoute,
  postWebhookExampleDeviceEventsRoute,
  postWebhookExampleDeviceUpdownsRoute,
  postWebhookExampleDiscoveredRawRssiRoute,
  postWebhookExampleLocationRoute,
  postWebhookExampleOccupancyAlertsRoute,
  postWebhookExamplePingRoute,
  postWebhookExampleSdkclientScanDataRoute,
  postWebhookExampleZoneRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookSamplesHandler = app
  .openapi(postWebhookExampleAlarmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleAssetRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleClientJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleClientSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleDeviceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleDeviceUpdownsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleDiscoveredRawRssiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleOccupancyAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExamplePingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleSdkclientScanDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookExampleZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
