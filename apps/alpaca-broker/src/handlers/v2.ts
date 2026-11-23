import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CalendarMarketRoute,
  getV2ClockRoute,
  getV2EventsAdminActionsRoute,
  getV2EventsFundingStatusRoute,
  getV2EventsIposRoute,
  getV2EventsJournalsStatusRoute,
  getV2EventsRebalancerRoute,
  getV2EventsSystemRoute,
  getV2EventsTradesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2CalendarMarketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventsAdminActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventsFundingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventsIposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventsJournalsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventsRebalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventsSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventsTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
