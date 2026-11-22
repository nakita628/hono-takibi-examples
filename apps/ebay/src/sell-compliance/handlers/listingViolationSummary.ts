import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingViolationSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const listingViolationSummaryHandler = app.openapi(getListingViolationSummaryRoute, (c) => {
  throw new Error('Not implemented')
})
