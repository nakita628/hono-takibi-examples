import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3CountriesRoute } from '../routes'

const app = new OpenAPIHono()

export const countriesHandler = app.openapi(getV3CountriesRoute, (c) => {
  throw new Error('Not implemented')
})
