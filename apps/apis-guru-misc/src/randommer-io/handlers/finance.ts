import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFinanceCountriesRoute,
  getApiFinanceCryptoAddressRoute,
  getApiFinanceCryptoAddressTypesRoute,
  getApiFinanceIbanCountryCodeRoute,
  postApiFinanceVatValidatorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const financeHandler = app
  .openapi(getApiFinanceCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFinanceCryptoAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFinanceCryptoAddressTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFinanceIbanCountryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFinanceVatValidatorRoute, (c) => {
    throw new Error('Not implemented')
  })
