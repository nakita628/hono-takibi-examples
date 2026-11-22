import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSettingsCurrencies202609ExchangeRatesBatchCreateRoute,
  postSettingsCurrencies202609ExchangeRatesBatchReadRoute,
  postSettingsCurrencies202609ExchangeRatesBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postSettingsCurrencies202609ExchangeRatesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCurrencies202609ExchangeRatesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCurrencies202609ExchangeRatesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
