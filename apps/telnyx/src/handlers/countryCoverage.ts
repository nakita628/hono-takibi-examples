import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountryCoverageCountriesCountryCodeRoute, getCountryCoverageRoute } from '../routes'

const app = new OpenAPIHono()

export const countryCoverageHandler = app
  .openapi(getCountryCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountryCoverageCountriesCountryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
