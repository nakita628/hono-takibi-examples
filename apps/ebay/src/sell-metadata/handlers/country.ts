import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountryCountryCodeSalesTaxJurisdictionRoute } from '../routes'

const app = new OpenAPIHono()

export const countryHandler = app.openapi(getCountryCountryCodeSalesTaxJurisdictionRoute, (c) => {
  throw new Error('Not implemented')
})
