import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdAvailablePlansPlanIdentifierRoute,
  getZonesZoneIdAvailablePlansRoute,
  getZonesZoneIdAvailableRatePlansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneRatePlanHandler = app
  .openapi(getZonesZoneIdAvailablePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAvailablePlansPlanIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAvailableRatePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
