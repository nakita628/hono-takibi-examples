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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCardTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getApiMiscCulturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMiscRandomAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNameBrandNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNameBusinessNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNameCulturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNameSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPhoneCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPhoneGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPhoneIMEIRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPhoneValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSocialNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSocialNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTextHumanizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTextLoremIpsumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTextPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTextReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTextTransformRoute, (c) => {
    throw new Error('Not implemented')
  })
