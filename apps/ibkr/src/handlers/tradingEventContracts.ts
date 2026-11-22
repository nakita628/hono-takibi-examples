import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ApiForecastCategoryTreeRoute,
  getV1ApiForecastContractDetailsRoute,
  getV1ApiForecastContractMarketRoute,
  getV1ApiForecastContractRulesRoute,
  getV1ApiForecastContractSchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingEventContractsHandler = app
  .openapi(getV1ApiForecastCategoryTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastContractDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastContractMarketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastContractRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastContractSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
