import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountryRoute } from '../routes'

const app = new OpenAPIHono()

export const CountryHandler = app.openapi(getCountryRoute, (c) => {
  throw new Error('Not implemented')
})
