import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsReverseGeocodeLookupsRoute } from '../routes'

const app = new OpenAPIHono()

export const usReverseGeocodeLookupsHandler = app.openapi(postUsReverseGeocodeLookupsRoute, (c) => {
  throw new Error('Not implemented')
})
