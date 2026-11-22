import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CountryInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const countryInfoHandler = app.openapi(getV1CountryInfoRoute, (c) => {
  throw new Error('Not implemented')
})
