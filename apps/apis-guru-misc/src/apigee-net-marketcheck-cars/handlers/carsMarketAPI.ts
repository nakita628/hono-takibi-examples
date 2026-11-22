import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMdsCarRoute,
  getPopularCarsRoute,
  getPredictCarPriceRoute,
  getPredictCarUkFmvRoute,
  getPredictCarUkPriceRoute,
  getSalesCarRoute,
  getStatsCarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const carsMarketAPIHandler = app
  .openapi(getMdsCarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPopularCarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPredictCarPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPredictCarUkFmvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPredictCarUkPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalesCarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsCarRoute, (c) => {
    throw new Error('Not implemented')
  })
