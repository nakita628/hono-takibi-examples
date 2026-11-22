import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2LocationsLocationIdCheckoutsRoute } from '../routes'

const app = new OpenAPIHono()

export const checkoutHandler = app.openapi(postV2LocationsLocationIdCheckoutsRoute, (c) => {
  throw new Error('Not implemented')
})
