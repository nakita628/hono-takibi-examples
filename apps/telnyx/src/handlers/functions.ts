import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteComputeFuncsIdLogsExportRoute,
  getComputeFuncsIdLogsExportRoute,
  getComputeFuncsIdLogsRoute,
  getComputeFuncsIdMetricAggregatesRoute,
  getComputeFuncsIdRevisionsRoute,
  getComputeFuncsIdShipInspectionRoute,
  getComputeFuncsRoute,
  putComputeFuncsIdLogsExportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionsHandler = app
  .openapi(getComputeFuncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComputeFuncsIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteComputeFuncsIdLogsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComputeFuncsIdLogsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putComputeFuncsIdLogsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComputeFuncsIdMetricAggregatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComputeFuncsIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComputeFuncsIdShipInspectionRoute, (c) => {
    throw new Error('Not implemented')
  })
