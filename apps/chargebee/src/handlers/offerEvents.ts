import { OpenAPIHono } from '@hono/zod-openapi'
import { postOfferEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const offerEventsHandler = app.openapi(postOfferEventsRoute, (c) => {
  throw new Error('Not implemented')
})
