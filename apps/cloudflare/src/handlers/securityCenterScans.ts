import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRoute,
  getAccountsAccountIdSecurityCenterInsightsScansRoute,
  getZonesZoneIdSecurityCenterInsightsScansRoute,
  postAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRoute,
  postAccountsAccountIdSecurityCenterInsightsScansRoute,
  postZonesZoneIdSecurityCenterInsightsScansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityCenterScansHandler = app
  .openapi(getAccountsAccountIdSecurityCenterInsightsScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSecurityCenterInsightsScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterInsightsScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSecurityCenterInsightsScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRoute, (c) => {
    throw new Error('Not implemented')
  })
