import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdLogsControlRetentionFlagRoute,
  getZonesZoneIdLogsRayidsRayIdRoute,
  getZonesZoneIdLogsReceivedFieldsRoute,
  getZonesZoneIdLogsReceivedRoute,
  postZonesZoneIdLogsControlRetentionFlagRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsReceivedHandler = app
  .openapi(getZonesZoneIdLogsControlRetentionFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogsControlRetentionFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogsRayidsRayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogsReceivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogsReceivedFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
