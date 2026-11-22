import { OpenAPIHono } from '@hono/zod-openapi'
import { getShoppingFlightOffersRoute, postShoppingFlightOffersRoute } from '../routes'

const app = new OpenAPIHono()

export const shoppingHandler = app
  .openapi(getShoppingFlightOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShoppingFlightOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
