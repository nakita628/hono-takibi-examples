import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingsByZipCodeAndDateRoute } from '../routes'

const app = new OpenAPIHono()

export const listingsByZipCodeAndDateHandler = app.openapi(
  getListingsByZipCodeAndDateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
