import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSalesTaxCountryCodeJurisdictionIdRoute,
  getSalesTaxCountryCodeJurisdictionIdRoute,
  getSalesTaxRoute,
  putSalesTaxCountryCodeJurisdictionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesTaxHandler = app
  .openapi(getSalesTaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSalesTaxCountryCodeJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalesTaxCountryCodeJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSalesTaxCountryCodeJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
