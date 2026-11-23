import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingsByRegionAndDateRoute } from '../routes'

const app = new OpenAPIHono()

export const listingsByRegionAndDateHandler = app.openapi(getListingsByRegionAndDateRoute, (c) => {
  throw new Error('Not implemented')
})
