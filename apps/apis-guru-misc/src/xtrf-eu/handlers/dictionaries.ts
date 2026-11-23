import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDictionariesActiveRoute,
  getDictionariesAllRoute,
  getDictionariesCurrencyIsoCodeExchangeRateRoute,
  getDictionariesTypeActiveRoute,
  getDictionariesTypeAllRoute,
  getDictionariesTypeIdRoute,
  postDictionariesCurrencyIsoCodeExchangeRateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dictionariesHandler = app
  .openapi(getDictionariesActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesCurrencyIsoCodeExchangeRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDictionariesCurrencyIsoCodeExchangeRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesTypeActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesTypeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
