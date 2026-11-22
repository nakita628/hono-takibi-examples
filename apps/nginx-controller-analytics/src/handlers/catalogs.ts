import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalyticsCatalogsDimensionsDimensionNameRoute,
  getAnalyticsCatalogsDimensionsRoute,
  getAnalyticsCatalogsMetricsMetricNameRoute,
  getAnalyticsCatalogsMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogsHandler = app
  .openapi(getAnalyticsCatalogsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsCatalogsMetricsMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsCatalogsDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsCatalogsDimensionsDimensionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
