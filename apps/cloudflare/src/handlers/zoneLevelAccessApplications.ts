import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAccessAppsAppIdRoute,
  getZonesZoneIdAccessAppsAppIdRoute,
  getZonesZoneIdAccessAppsAppIdUserPolicyChecksRoute,
  getZonesZoneIdAccessAppsRoute,
  patchZonesZoneIdAccessAppsAppIdSettingsRoute,
  postZonesZoneIdAccessAppsAppIdRevokeTokensRoute,
  postZonesZoneIdAccessAppsRoute,
  putZonesZoneIdAccessAppsAppIdRoute,
  putZonesZoneIdAccessAppsAppIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelAccessApplicationsHandler = app
  .openapi(getZonesZoneIdAccessAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessAppsAppIdRevokeTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdAccessAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessAppsAppIdUserPolicyChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
