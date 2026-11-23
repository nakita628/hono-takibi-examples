import { OpenAPIHono } from '@hono/zod-openapi'
import { getOfferRoute } from '../routes'

const app = new OpenAPIHono()

export const offerHandler = app.openapi(getOfferRoute, (c) => {
  throw new Error('Not implemented')
})
