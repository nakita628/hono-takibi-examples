import { OpenAPIHono } from '@hono/zod-openapi'
import {
  administrationHandler,
  hyperparameterManagementHandler,
  insightDrivenPlanningForecastOptimizationHandler,
  inventoryManagementHandler,
  portfolioPerformanceManagementHandler,
  pricingHandler,
  productLifecycleManagementHandler,
  reportingAndMonitoringHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', administrationHandler)
  .route('/', insightDrivenPlanningForecastOptimizationHandler)
  .route('/', hyperparameterManagementHandler)
  .route('/', inventoryManagementHandler)
  .route('/', productLifecycleManagementHandler)
  .route('/', portfolioPerformanceManagementHandler)
  .route('/', pricingHandler)
  .route('/', reportingAndMonitoringHandler)

export default app
