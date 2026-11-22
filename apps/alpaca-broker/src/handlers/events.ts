import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EventsAccountsStatusRoute,
  getV1EventsJournalsStatusRoute,
  getV1EventsNtaRoute,
  getV1EventsTransfersStatusRoute,
  getV2beta1EventsActivitiesRoute,
  getV2EventsAdminActionsRoute,
  getV2EventsFundingStatusRoute,
  getV2EventsIposRoute,
  getV2EventsJournalsStatusRoute,
  getV2EventsRebalancerRoute,
  getV2EventsSystemRoute,
  getV2EventsTradesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getV1EventsAccountsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsJournalsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsNtaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsTransfersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1EventsActivitiesRoute, (c) => {
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
