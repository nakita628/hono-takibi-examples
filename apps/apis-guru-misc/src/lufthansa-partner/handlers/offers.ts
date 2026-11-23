import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOffersFaresAllfaresRoute,
  getOffersFaresBestfaresRoute,
  getOffersFaresDeeplinkFfpRoute,
  getOffersFaresDeeplinkItcoRoute,
  getOffersFaresDeeplinkRoute,
  getOffersFaresFaresRoute,
  getOffersFaresLowestfaresRoute,
  getOffersFaresSubscriptionsRoute,
  getOffersOndRouteOriginDestinationRoute,
  getOffersOndStatusRoute,
  getOffersOndTopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offersHandler = app
  .openapi(getOffersFaresAllfaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersFaresBestfaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersFaresDeeplinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersFaresDeeplinkFfpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersFaresDeeplinkItcoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersFaresFaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersFaresLowestfaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersFaresSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersOndRouteOriginDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersOndStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersOndTopRoute, (c) => {
    throw new Error('Not implemented')
  })
