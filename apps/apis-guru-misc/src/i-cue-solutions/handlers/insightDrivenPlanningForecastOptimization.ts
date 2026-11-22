import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getForecastResultJobIdRoute,
  getForecastStatusJobIdRoute,
  postForecastAIHistoryAndForecastRoute,
  postForecastAIRoute,
  postForecastFileToForecastRoute,
  postForecastForecastBottomUpRoute,
  postForecastForecastTopDownRoute,
  postForecastFullDetailRoute,
  postForecastHistoryAndForecastRoute,
  postForecastOptimalParameterRoute,
  postForecastRerunRoute,
  postForecastRoute,
  postOutlierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightDrivenPlanningForecastOptimizationHandler = app
  .openapi(postForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastAIRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastAIHistoryAndForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastFileToForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastForecastBottomUpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastForecastTopDownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastFullDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastHistoryAndForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastOptimalParameterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForecastRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForecastResultJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForecastStatusJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOutlierRoute, (c) => {
    throw new Error('Not implemented')
  })
