import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountryRoute } from '../routes'

const app = new OpenAPIHono()

export const countryHandler = app.openapi(getCountryRoute, (c) => {
  throw new Error('Not implemented')
})
