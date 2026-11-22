import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDictionariesCurrencyIsoCodeExchangeRateRoute,
  postDictionariesCurrencyIsoCodeExchangeRateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const currencyExchangeRatesHandler = app
  .openapi(getDictionariesCurrencyIsoCodeExchangeRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDictionariesCurrencyIsoCodeExchangeRateRoute, (c) => {
    throw new Error('Not implemented')
  })
