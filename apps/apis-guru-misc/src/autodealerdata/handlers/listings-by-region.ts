import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingsByRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const listingsByRegionHandler = app.openapi(getListingsByRegionRoute, (c) => {
  throw new Error('Not implemented')
})
