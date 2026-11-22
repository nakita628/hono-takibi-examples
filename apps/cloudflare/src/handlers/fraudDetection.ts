import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdFraudDetectionSettingsRoute,
  putZonesZoneIdFraudDetectionSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fraudDetectionHandler = app
  .openapi(getZonesZoneIdFraudDetectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFraudDetectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
