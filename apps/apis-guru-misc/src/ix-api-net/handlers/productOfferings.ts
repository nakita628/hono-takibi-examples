import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductOfferingsIdRoute, getProductOfferingsRoute } from '../routes'

const app = new OpenAPIHono()

export const productOfferingsHandler = app
  .openapi(getProductOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductOfferingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
