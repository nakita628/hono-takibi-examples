import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdDataTaxRatesRoute,
  getCompaniesCompanyIdDataTaxRatesTaxRateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxRatesHandler = app
  .openapi(getCompaniesCompanyIdDataTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataTaxRatesTaxRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
