import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesForecastZoneIdObservationsRoute,
  getZonesForecastZoneIdStationsRoute,
  getZonesRoute,
  getZonesTypeRoute,
  getZonesTypeZoneIdForecastRoute,
  getZonesTypeZoneIdRadioRoute,
  getZonesTypeZoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zonesHandler = app
  .openapi(getZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesTypeZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesTypeZoneIdForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesTypeZoneIdRadioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesForecastZoneIdObservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesForecastZoneIdStationsRoute, (c) => {
    throw new Error('Not implemented')
  })
