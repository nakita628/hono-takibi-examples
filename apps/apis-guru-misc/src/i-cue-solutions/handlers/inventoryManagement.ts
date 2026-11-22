import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postInventoryAmazonIpiRoute,
  postInventoryCaryyingCostRoute,
  postInventoryEoqRoute,
  postInventoryFillRateRoute,
  postInventoryFinancialImapctForecastAccuracyRoute,
  postInventoryInventoryTurnoverRoute,
  postInventoryLtdRoute,
  postInventoryMoqRoute,
  postInventoryOptimalServiceLevelRoute,
  postInventoryReorderPointRoute,
  postInventorySafetyStockRoute,
  postInventoryServiceLevelRoute,
  postInventoryTurnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventoryManagementHandler = app
  .openapi(postInventoryAmazonIpiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryCaryyingCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryEoqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryFillRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryFinancialImapctForecastAccuracyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryInventoryTurnoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryLtdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryMoqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryOptimalServiceLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryReorderPointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventorySafetyStockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryServiceLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInventoryTurnsRoute, (c) => {
    throw new Error('Not implemented')
  })
