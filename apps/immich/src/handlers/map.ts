import { OpenAPIHono } from '@hono/zod-openapi'
import { getMapMarkersRoute, getMapReverseGeocodeRoute } from '../routes'

const app = new OpenAPIHono()

export const mapHandler = app
  .openapi(getMapMarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapReverseGeocodeRoute, (c) => {
    throw new Error('Not implemented')
  })
