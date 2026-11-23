import { OpenAPIHono } from '@hono/zod-openapi'
import { postOfferEngineOffersListRoute } from '../routes'

const app = new OpenAPIHono()

export const offerEngineHandler = app.openapi(postOfferEngineOffersListRoute, (c) => {
  throw new Error('Not implemented')
})
