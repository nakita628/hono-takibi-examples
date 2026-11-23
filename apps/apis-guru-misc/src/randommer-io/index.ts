import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCardRoute,
  getApiCardTypesRoute,
  getApiFinanceCountriesRoute,
  getApiFinanceCryptoAddressRoute,
  getApiFinanceCryptoAddressTypesRoute,
  getApiFinanceIbanCountryCodeRoute,
  getApiMiscCulturesRoute,
  getApiMiscRandomAddressRoute,
  getApiNameCulturesRoute,
  getApiNameRoute,
  getApiNameSuggestionsRoute,
  getApiPhoneCountriesRoute,
  getApiPhoneGenerateRoute,
  getApiPhoneIMEIRoute,
  getApiPhoneValidateRoute,
  getApiSocialNumberRoute,
  getApiTextLoremIpsumRoute,
  getApiTextPasswordRoute,
  postApiFinanceVatValidatorRoute,
  postApiNameBrandNameRoute,
  postApiNameBusinessNameRoute,
  postApiSocialNumberRoute,
  postApiTextHumanizeRoute,
  postApiTextReviewRoute,
  postApiTextTransformRoute,
} from './routes'
import {
  getApiCardRouteHandler,
  getApiCardTypesRouteHandler,
  getApiFinanceCountriesRouteHandler,
  getApiFinanceCryptoAddressRouteHandler,
  getApiFinanceCryptoAddressTypesRouteHandler,
  getApiFinanceIbanCountryCodeRouteHandler,
  getApiMiscCulturesRouteHandler,
  getApiMiscRandomAddressRouteHandler,
  getApiNameCulturesRouteHandler,
  getApiNameRouteHandler,
  getApiNameSuggestionsRouteHandler,
  getApiPhoneCountriesRouteHandler,
  getApiPhoneGenerateRouteHandler,
  getApiPhoneIMEIRouteHandler,
  getApiPhoneValidateRouteHandler,
  getApiSocialNumberRouteHandler,
  getApiTextLoremIpsumRouteHandler,
  getApiTextPasswordRouteHandler,
  postApiFinanceVatValidatorRouteHandler,
  postApiNameBrandNameRouteHandler,
  postApiNameBusinessNameRouteHandler,
  postApiSocialNumberRouteHandler,
  postApiTextHumanizeRouteHandler,
  postApiTextReviewRouteHandler,
  postApiTextTransformRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiCardRoute, getApiCardRouteHandler)
  .openapi(getApiCardTypesRoute, getApiCardTypesRouteHandler)
  .openapi(getApiFinanceCountriesRoute, getApiFinanceCountriesRouteHandler)
  .openapi(getApiFinanceCryptoAddressRoute, getApiFinanceCryptoAddressRouteHandler)
  .openapi(getApiFinanceCryptoAddressTypesRoute, getApiFinanceCryptoAddressTypesRouteHandler)
  .openapi(getApiFinanceIbanCountryCodeRoute, getApiFinanceIbanCountryCodeRouteHandler)
  .openapi(postApiFinanceVatValidatorRoute, postApiFinanceVatValidatorRouteHandler)
  .openapi(getApiMiscCulturesRoute, getApiMiscCulturesRouteHandler)
  .openapi(getApiMiscRandomAddressRoute, getApiMiscRandomAddressRouteHandler)
  .openapi(getApiNameRoute, getApiNameRouteHandler)
  .openapi(postApiNameBrandNameRoute, postApiNameBrandNameRouteHandler)
  .openapi(postApiNameBusinessNameRoute, postApiNameBusinessNameRouteHandler)
  .openapi(getApiNameCulturesRoute, getApiNameCulturesRouteHandler)
  .openapi(getApiNameSuggestionsRoute, getApiNameSuggestionsRouteHandler)
  .openapi(getApiPhoneCountriesRoute, getApiPhoneCountriesRouteHandler)
  .openapi(getApiPhoneGenerateRoute, getApiPhoneGenerateRouteHandler)
  .openapi(getApiPhoneIMEIRoute, getApiPhoneIMEIRouteHandler)
  .openapi(getApiPhoneValidateRoute, getApiPhoneValidateRouteHandler)
  .openapi(getApiSocialNumberRoute, getApiSocialNumberRouteHandler)
  .openapi(postApiSocialNumberRoute, postApiSocialNumberRouteHandler)
  .openapi(postApiTextHumanizeRoute, postApiTextHumanizeRouteHandler)
  .openapi(getApiTextLoremIpsumRoute, getApiTextLoremIpsumRouteHandler)
  .openapi(getApiTextPasswordRoute, getApiTextPasswordRouteHandler)
  .openapi(postApiTextReviewRoute, postApiTextReviewRouteHandler)
  .openapi(postApiTextTransformRoute, postApiTextTransformRouteHandler)

export default app
