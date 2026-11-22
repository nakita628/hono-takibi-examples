import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSpeedApiPagesUrlTestsRoute,
  deleteZonesZoneIdSpeedApiScheduleUrlRoute,
  getZonesZoneIdSpeedApiAvailabilitiesRoute,
  getZonesZoneIdSpeedApiPagesRoute,
  getZonesZoneIdSpeedApiPagesUrlTestsRoute,
  getZonesZoneIdSpeedApiPagesUrlTestsTestIdRoute,
  getZonesZoneIdSpeedApiPagesUrlTrendRoute,
  getZonesZoneIdSpeedApiScheduleUrlRoute,
  postZonesZoneIdSpeedApiPagesUrlTestsRoute,
  postZonesZoneIdSpeedApiScheduleUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const observatoryHandler = app
  .openapi(getZonesZoneIdSpeedApiAvailabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpeedApiPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSpeedApiPagesUrlTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpeedApiPagesUrlTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSpeedApiPagesUrlTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpeedApiPagesUrlTestsTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpeedApiPagesUrlTrendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSpeedApiScheduleUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpeedApiScheduleUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSpeedApiScheduleUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
