import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CountriesRoute } from '../routes'

const app = new OpenAPIHono()

export const countryHandler = app.openapi(getV1CountriesRoute, (c) => {
  throw new Error('Not implemented')
})
