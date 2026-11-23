import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlacesPlaceRoute, getPlacesRoute } from '../routes'

const app = new OpenAPIHono()

export const placesHandler = app
  .openapi(getPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceRoute, (c) => {
    throw new Error('Not implemented')
  })
