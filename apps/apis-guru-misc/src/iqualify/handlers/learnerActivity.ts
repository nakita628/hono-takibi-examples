import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOfferingsOfferingIdAnalyticsLearnersProgressRoute,
  getOfferingsOfferingIdAnalyticsSocialNotesRoute,
  getOfferingsOfferingIdAnalyticsUnitReactionsRoute,
  getUsersAllProgressRoute,
  getUsersUserEmailOfferingsOfferingIdProgressRoute,
  getUsersUserEmailProgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const learnerActivityHandler = app
  .openapi(getOfferingsOfferingIdAnalyticsLearnersProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsSocialNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsUnitReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersAllProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserEmailOfferingsOfferingIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserEmailProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
