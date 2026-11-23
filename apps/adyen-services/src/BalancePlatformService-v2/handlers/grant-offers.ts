import { OpenAPIHono } from '@hono/zod-openapi'
import { getGrantOffersGrantOfferIdRoute, getGrantOffersRoute } from '../routes'

const app = new OpenAPIHono()

export const grantOffersHandler = app
  .openapi(getGrantOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrantOffersGrantOfferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
