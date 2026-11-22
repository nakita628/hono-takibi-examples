import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaNameRoute,
  getV1betaParentAudienceExportsRoute,
  postV1betaNameQueryRoute,
  postV1betaParentAudienceExportsRoute,
  postV1betaPropertyBatchRunPivotReportsRoute,
  postV1betaPropertyBatchRunReportsRoute,
  postV1betaPropertyCheckCompatibilityRoute,
  postV1betaPropertyRunPivotReportRoute,
  postV1betaPropertyRunRealtimeReportRoute,
  postV1betaPropertyRunReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const propertiesHandler = app
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentAudienceExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentAudienceExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaPropertyBatchRunPivotReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaPropertyBatchRunReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaPropertyCheckCompatibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaPropertyRunPivotReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaPropertyRunRealtimeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaPropertyRunReportRoute, (c) => {
    throw new Error('Not implemented')
  })
