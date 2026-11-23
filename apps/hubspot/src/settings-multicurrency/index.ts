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
} from './routes'
import {
  getSettingsCurrencies202609CentralFxRatesInformationRouteHandler,
  getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesRouteHandler,
  getSettingsCurrencies202609CodesRouteHandler,
  getSettingsCurrencies202609CompanyCurrencyRouteHandler,
  getSettingsCurrencies202609ExchangeRatesCurrentRouteHandler,
  getSettingsCurrencies202609ExchangeRatesExchangeRateIdRouteHandler,
  getSettingsCurrencies202609ExchangeRatesRouteHandler,
  patchSettingsCurrencies202609ExchangeRatesExchangeRateIdRouteHandler,
  postSettingsCurrencies202609CentralFxRatesAddCurrencyRouteHandler,
  postSettingsCurrencies202609ExchangeRatesBatchCreateRouteHandler,
  postSettingsCurrencies202609ExchangeRatesBatchReadRouteHandler,
  postSettingsCurrencies202609ExchangeRatesBatchUpdateRouteHandler,
  postSettingsCurrencies202609ExchangeRatesRouteHandler,
  postSettingsCurrencies202609ExchangeRatesUpdateVisibilityRouteHandler,
  putSettingsCurrencies202609CompanyCurrencyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postSettingsCurrencies202609CentralFxRatesAddCurrencyRoute,
    postSettingsCurrencies202609CentralFxRatesAddCurrencyRouteHandler,
  )
  .openapi(
    getSettingsCurrencies202609CentralFxRatesInformationRoute,
    getSettingsCurrencies202609CentralFxRatesInformationRouteHandler,
  )
  .openapi(
    getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesRoute,
    getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesRouteHandler,
  )
  .openapi(getSettingsCurrencies202609CodesRoute, getSettingsCurrencies202609CodesRouteHandler)
  .openapi(
    getSettingsCurrencies202609CompanyCurrencyRoute,
    getSettingsCurrencies202609CompanyCurrencyRouteHandler,
  )
  .openapi(
    putSettingsCurrencies202609CompanyCurrencyRoute,
    putSettingsCurrencies202609CompanyCurrencyRouteHandler,
  )
  .openapi(
    getSettingsCurrencies202609ExchangeRatesRoute,
    getSettingsCurrencies202609ExchangeRatesRouteHandler,
  )
  .openapi(
    postSettingsCurrencies202609ExchangeRatesRoute,
    postSettingsCurrencies202609ExchangeRatesRouteHandler,
  )
  .openapi(
    postSettingsCurrencies202609ExchangeRatesBatchCreateRoute,
    postSettingsCurrencies202609ExchangeRatesBatchCreateRouteHandler,
  )
  .openapi(
    postSettingsCurrencies202609ExchangeRatesBatchReadRoute,
    postSettingsCurrencies202609ExchangeRatesBatchReadRouteHandler,
  )
  .openapi(
    postSettingsCurrencies202609ExchangeRatesBatchUpdateRoute,
    postSettingsCurrencies202609ExchangeRatesBatchUpdateRouteHandler,
  )
  .openapi(
    getSettingsCurrencies202609ExchangeRatesCurrentRoute,
    getSettingsCurrencies202609ExchangeRatesCurrentRouteHandler,
  )
  .openapi(
    postSettingsCurrencies202609ExchangeRatesUpdateVisibilityRoute,
    postSettingsCurrencies202609ExchangeRatesUpdateVisibilityRouteHandler,
  )
  .openapi(
    getSettingsCurrencies202609ExchangeRatesExchangeRateIdRoute,
    getSettingsCurrencies202609ExchangeRatesExchangeRateIdRouteHandler,
  )
  .openapi(
    patchSettingsCurrencies202609ExchangeRatesExchangeRateIdRoute,
    patchSettingsCurrencies202609ExchangeRatesExchangeRateIdRouteHandler,
  )

export default app
