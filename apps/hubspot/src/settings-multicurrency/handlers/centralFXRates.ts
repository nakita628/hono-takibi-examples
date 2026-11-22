import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsCurrencies202609CentralFxRatesInformationRoute,
  getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesRoute,
  postSettingsCurrencies202609CentralFxRatesAddCurrencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const centralFXRatesHandler = app
  .openapi(postSettingsCurrencies202609CentralFxRatesAddCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609CentralFxRatesInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
