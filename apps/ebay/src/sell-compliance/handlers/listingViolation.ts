import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingViolationRoute, postSuppressListingViolationRoute } from '../routes'

const app = new OpenAPIHono()

export const listingViolationHandler = app
  .openapi(getListingViolationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuppressListingViolationRoute, (c) => {
    throw new Error('Not implemented')
  })
