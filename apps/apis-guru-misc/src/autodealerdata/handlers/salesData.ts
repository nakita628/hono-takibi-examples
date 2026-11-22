import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetRegionBrandMarketShareRoute,
  getGetRegionMarketShareRoute,
  getModelYearDistRoute,
  getRegionDailySalesRoute,
  getRegionSalesRoute,
  getTopModelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesDataHandler = app
  .openapi(getGetRegionBrandMarketShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetRegionMarketShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelYearDistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegionDailySalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegionSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
