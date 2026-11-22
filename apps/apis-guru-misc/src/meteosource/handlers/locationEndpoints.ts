import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindPlacesPrefixRoute, getFindPlacesRoute, getNearestPlaceRoute } from '../routes'

const app = new OpenAPIHono()

export const locationEndpointsHandler = app
  .openapi(getFindPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindPlacesPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNearestPlaceRoute, (c) => {
    throw new Error('Not implemented')
  })
