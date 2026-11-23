import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingsByDateRoute } from '../routes'

const app = new OpenAPIHono()

export const listingsByDateHandler = app.openapi(getListingsByDateRoute, (c) => {
  throw new Error('Not implemented')
})
