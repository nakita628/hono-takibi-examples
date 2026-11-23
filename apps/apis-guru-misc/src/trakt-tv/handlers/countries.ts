import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountriesTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const countriesHandler = app.openapi(getCountriesTypeRoute, (c) => {
  throw new Error('Not implemented')
})
