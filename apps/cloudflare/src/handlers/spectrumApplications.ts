import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSpectrumAppsAppIdRoute,
  getZonesZoneIdSpectrumAppsAppIdRoute,
  getZonesZoneIdSpectrumAppsRoute,
  getZonesZoneIdSpectrumProtocolsRoute,
  postZonesZoneIdSpectrumAppsRoute,
  putZonesZoneIdSpectrumAppsAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spectrumApplicationsHandler = app
  .openapi(getZonesZoneIdSpectrumAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSpectrumAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSpectrumAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpectrumAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSpectrumAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpectrumProtocolsRoute, (c) => {
    throw new Error('Not implemented')
  })
