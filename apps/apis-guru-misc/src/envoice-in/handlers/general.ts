import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiGeneralCountriesRoute,
  getApiGeneralCurrenciesRoute,
  getApiGeneralDateformatsRoute,
  getApiGeneralUilanguagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(getApiGeneralCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGeneralCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGeneralDateformatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGeneralUilanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
