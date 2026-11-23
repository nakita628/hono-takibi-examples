import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStationsRoute,
  getStationsStationIdObservationsLatestRoute,
  getStationsStationIdObservationsRoute,
  getStationsStationIdObservationsTimeRoute,
  getStationsStationIdRoute,
  getStationsStationIdTafsDateTimeRoute,
  getStationsStationIdTafsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stationsHandler = app
  .openapi(getStationsStationIdObservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStationsStationIdObservationsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStationsStationIdObservationsTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStationsStationIdTafsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStationsStationIdTafsDateTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStationsStationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
