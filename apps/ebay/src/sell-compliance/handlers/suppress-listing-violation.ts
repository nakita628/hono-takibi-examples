import { OpenAPIHono } from '@hono/zod-openapi'
import { postSuppressListingViolationRoute } from '../routes'

const app = new OpenAPIHono()

export const suppressListingViolationHandler = app.openapi(
  postSuppressListingViolationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
