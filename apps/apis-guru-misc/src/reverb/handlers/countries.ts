import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountriesRoute } from '../routes'

const app = new OpenAPIHono()

export const countriesHandler = app.openapi(getCountriesRoute, (c) => {
  throw new Error('Not implemented')
})
