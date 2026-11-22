import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlacesPlaceIdDescendantsRoute } from '../routes'

const app = new OpenAPIHono()

export const placesPlaceFunctionsHandler = app.openapi(getPlacesPlaceIdDescendantsRoute, (c) => {
  throw new Error('Not implemented')
})
