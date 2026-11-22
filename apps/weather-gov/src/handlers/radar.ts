import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarProfilersStationIdRoute,
  getRadarQueuesHostRoute,
  getRadarServersIdRoute,
  getRadarServersRoute,
  getRadarSpgdsRoute,
  getRadarStationsRoute,
  getRadarStationsStationIdAlarmsRoute,
  getRadarStationsStationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarHandler = app
  .openapi(getRadarServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarSpgdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarStationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarStationsStationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarStationsStationIdAlarmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarQueuesHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarProfilersStationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
