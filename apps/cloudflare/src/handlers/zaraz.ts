import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdSettingsZarazConfigRoute,
  getZonesZoneIdSettingsZarazDefaultRoute,
  getZonesZoneIdSettingsZarazExportRoute,
  getZonesZoneIdSettingsZarazHistoryConfigsRoute,
  getZonesZoneIdSettingsZarazHistoryRoute,
  getZonesZoneIdSettingsZarazWorkflowRoute,
  postZonesZoneIdSettingsZarazPublishRoute,
  putZonesZoneIdSettingsZarazConfigRoute,
  putZonesZoneIdSettingsZarazHistoryRoute,
  putZonesZoneIdSettingsZarazWorkflowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zarazHandler = app
  .openapi(getZonesZoneIdSettingsZarazConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSettingsZarazConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSettingsZarazDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSettingsZarazExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSettingsZarazHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSettingsZarazHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSettingsZarazHistoryConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSettingsZarazPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSettingsZarazWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSettingsZarazWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
