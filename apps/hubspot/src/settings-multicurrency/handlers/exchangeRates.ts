import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsCurrencies202609ExchangeRatesCurrentRoute,
  getSettingsCurrencies202609ExchangeRatesExchangeRateIdRoute,
  getSettingsCurrencies202609ExchangeRatesRoute,
  patchSettingsCurrencies202609ExchangeRatesExchangeRateIdRoute,
  postSettingsCurrencies202609ExchangeRatesRoute,
  postSettingsCurrencies202609ExchangeRatesUpdateVisibilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exchangeRatesHandler = app
  .openapi(getSettingsCurrencies202609ExchangeRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCurrencies202609ExchangeRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609ExchangeRatesCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCurrencies202609ExchangeRatesUpdateVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609ExchangeRatesExchangeRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsCurrencies202609ExchangeRatesExchangeRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
