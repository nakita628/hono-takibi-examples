import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRoute,
  getOfferingsOfferingIdAnalyticsPulsesResponsesRoute,
  getOfferingsOfferingIdAnalyticsPulsesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pulsesHandler = app
  .openapi(getOfferingsOfferingIdAnalyticsPulsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsPulsesResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
