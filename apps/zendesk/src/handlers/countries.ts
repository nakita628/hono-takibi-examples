import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2CountriesIdJsonRoute, getApiV2CountriesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const countriesHandler = app
  .openapi(getApiV2CountriesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CountriesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
