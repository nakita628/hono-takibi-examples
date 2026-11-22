import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsReverseGeocodeLookupsRoute } from '../routes'

const app = new OpenAPIHono()

export const reverseGeocodeLookupsHandler = app.openapi(postUsReverseGeocodeLookupsRoute, (c) => {
  throw new Error('Not implemented')
})
