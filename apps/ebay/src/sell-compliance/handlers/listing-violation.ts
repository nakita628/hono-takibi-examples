import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingViolationRoute } from '../routes'

const app = new OpenAPIHono()

export const listingViolationHandler = app.openapi(getListingViolationRoute, (c) => {
  throw new Error('Not implemented')
})
