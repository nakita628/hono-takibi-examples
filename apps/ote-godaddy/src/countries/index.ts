import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CountriesCountryKeyRoute, getV1CountriesRoute } from './routes'
import { getV1CountriesCountryKeyRouteHandler, getV1CountriesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1CountriesRoute, getV1CountriesRouteHandler)
  .openapi(getV1CountriesCountryKeyRoute, getV1CountriesCountryKeyRouteHandler)

export default app
