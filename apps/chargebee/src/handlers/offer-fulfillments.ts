import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOfferFulfillmentsOfferFulfillmentIdRoute,
  postOfferFulfillmentsOfferFulfillmentIdRoute,
  postOfferFulfillmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offerFulfillmentsHandler = app
  .openapi(postOfferFulfillmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferFulfillmentsOfferFulfillmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferFulfillmentsOfferFulfillmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
