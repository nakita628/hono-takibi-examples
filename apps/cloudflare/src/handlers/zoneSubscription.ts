import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSubscriptionRoute,
  deleteZonesZoneIdSubscriptionsRoute,
  getZonesZoneIdSubscriptionRoute,
  postZonesZoneIdSubscriptionRoute,
  postZonesZoneIdSubscriptionsRoute,
  putZonesZoneIdSubscriptionRoute,
  putZonesZoneIdSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneSubscriptionHandler = app
  .openapi(deleteZonesZoneIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
