import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdObservabilityTracingRulesRoute,
  deleteZonesZoneIdObservabilityTracingSettingsRoute,
  getAccountsAccountIdObservabilityUsageLimitRoute,
  getZonesZoneIdObservabilityTracingRulesRoute,
  getZonesZoneIdObservabilityTracingSettingsRoute,
  patchZonesZoneIdObservabilityTracingSettingsRoute,
  putZonesZoneIdObservabilityTracingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const observabilityHandler = app
  .openapi(getAccountsAccountIdObservabilityUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdObservabilityTracingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdObservabilityTracingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdObservabilityTracingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdObservabilityTracingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdObservabilityTracingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdObservabilityTracingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
