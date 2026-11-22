import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOfferingsCurrentRoute,
  getOfferingsFutureRoute,
  getOfferingsInfoTextPatternRoute,
  getOfferingsOfferingIdRoute,
  getOfferingsPastRoute,
  getOfferingsRoute,
  getOfferingsSummaryRoute,
  patchOfferingsOfferingIdRoute,
  postOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offeringsHandler = app
  .openapi(getOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsFutureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsInfoTextPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsPastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOfferingsOfferingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
