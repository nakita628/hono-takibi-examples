import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdTokenValidationRulesRuleIdRoute,
  getZonesZoneIdTokenValidationRulesRoute,
  getZonesZoneIdTokenValidationRulesRuleIdRoute,
  patchZonesZoneIdTokenValidationRulesBulkRoute,
  patchZonesZoneIdTokenValidationRulesRuleIdRoute,
  postZonesZoneIdTokenValidationRulesBulkRoute,
  postZonesZoneIdTokenValidationRulesPreviewRoute,
  postZonesZoneIdTokenValidationRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokenValidationTokenRulesHandler = app
  .openapi(getZonesZoneIdTokenValidationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdTokenValidationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdTokenValidationRulesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdTokenValidationRulesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdTokenValidationRulesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdTokenValidationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdTokenValidationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdTokenValidationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
