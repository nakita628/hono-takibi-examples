import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdAiSecurityCustomTopicsRoute,
  getZonesZoneIdAiSecuritySettingsRoute,
  putZonesZoneIdAiSecurityCustomTopicsRoute,
  putZonesZoneIdAiSecuritySettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiSecurityForAppsHandler = app
  .openapi(getZonesZoneIdAiSecurityCustomTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAiSecurityCustomTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAiSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAiSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
