import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1ChartsCalculatedFieldsRoute,
  postApiV1ChartsChartSummaryV2Route,
  postApiV1ChartsTotalsRoute,
  postApiV1ChartsTotalsV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const chartsHandler = app
  .openapi(postApiV1ChartsTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartsTotalsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartsChartSummaryV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartsCalculatedFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
