import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdForecastCacheRoute,
  getUsersIdBudgetRoute,
  getUsersIdBudgetSummaryRoute,
  getUsersIdTrendAnalysisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const budgetingHandler = app
  .openapi(getUsersIdBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdBudgetSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdForecastCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTrendAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
