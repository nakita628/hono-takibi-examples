import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingConditionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listingConditionsHandler = app.openapi(getListingConditionsRoute, (c) => {
  throw new Error('Not implemented')
})
