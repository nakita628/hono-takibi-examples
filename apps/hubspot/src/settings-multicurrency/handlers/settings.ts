import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsCurrencies202609CentralFxRatesInformationRoute,
  getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesRoute,
  getSettingsCurrencies202609CodesRoute,
  getSettingsCurrencies202609CompanyCurrencyRoute,
  getSettingsCurrencies202609ExchangeRatesCurrentRoute,
  getSettingsCurrencies202609ExchangeRatesExchangeRateIdRoute,
  getSettingsCurrencies202609ExchangeRatesRoute,
  patchSettingsCurrencies202609ExchangeRatesExchangeRateIdRoute,
  postSettingsCurrencies202609CentralFxRatesAddCurrencyRoute,
  postSettingsCurrencies202609ExchangeRatesBatchCreateRoute,
  postSettingsCurrencies202609ExchangeRatesBatchReadRoute,
  postSettingsCurrencies202609ExchangeRatesBatchUpdateRoute,
  postSettingsCurrencies202609ExchangeRatesRoute,
  postSettingsCurrencies202609ExchangeRatesUpdateVisibilityRoute,
  putSettingsCurrencies202609CompanyCurrencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(postSettingsCurrencies202609CentralFxRatesAddCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609CentralFxRatesInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609CodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609CompanyCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsCurrencies202609CompanyCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609ExchangeRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCurrencies202609ExchangeRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCurrencies202609ExchangeRatesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCurrencies202609ExchangeRatesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCurrencies202609ExchangeRatesBatchUpdateRoute, (c) => {
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
