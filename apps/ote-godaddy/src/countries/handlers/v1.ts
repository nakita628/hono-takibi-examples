import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CountriesCountryKeyRoute, getV1CountriesRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CountriesCountryKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
