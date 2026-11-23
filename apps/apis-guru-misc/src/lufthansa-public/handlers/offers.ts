import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOffersLoungesLocationRoute,
  getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offersHandler = app
  .openapi(getOffersLoungesLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRoute, (c) => {
    throw new Error('Not implemented')
  })
