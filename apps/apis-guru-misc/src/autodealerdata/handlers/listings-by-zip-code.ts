import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingsByZipCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const listingsByZipCodeHandler = app.openapi(getListingsByZipCodeRoute, (c) => {
  throw new Error('Not implemented')
})
