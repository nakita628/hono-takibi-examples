import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCurrenciesListRoute,
  getCurrenciesSiteCurrencyIdRoute,
  postCurrenciesRoute,
  postCurrenciesSiteCurrencyIdAddScheduleRoute,
  postCurrenciesSiteCurrencyIdRemoveScheduleRoute,
  postCurrenciesSiteCurrencyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const currenciesHandler = app
  .openapi(postCurrenciesSiteCurrencyIdAddScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCurrenciesSiteCurrencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCurrenciesSiteCurrencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCurrenciesSiteCurrencyIdRemoveScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCurrenciesListRoute, (c) => {
    throw new Error('Not implemented')
  })
