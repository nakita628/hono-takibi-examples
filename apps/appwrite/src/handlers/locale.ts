import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLocaleCodesRoute,
  getLocaleContinentsRoute,
  getLocaleCountriesEuRoute,
  getLocaleCountriesPhonesRoute,
  getLocaleCountriesRoute,
  getLocaleCurrenciesRoute,
  getLocaleLanguagesRoute,
  getLocaleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const localeHandler = app
  .openapi(getLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocaleCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocaleContinentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocaleCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocaleCountriesEuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocaleCountriesPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocaleCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocaleLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
