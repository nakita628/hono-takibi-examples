import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTargetsAllScansIndexRoute,
  getTargetsTargetIdScansDatesIndexRoute,
  getTargetsTargetIdScansIdEndpointsIndexRoute,
  getTargetsTargetIdScansIdIndexRoute,
  getTargetsTargetIdScansIdReportDefaultIndexRoute,
  getTargetsTargetIdScansIdReportIndexRoute,
  getTargetsTargetIdScansIdReportOwaspIndexRoute,
  getTargetsTargetIdScansIdReportPciIndexRoute,
  getTargetsTargetIdScansIndexRoute,
  getTargetsTargetIdScansRetrievePageIndexRoute,
  postTargetsTargetIdScanNowIndexRoute,
  postTargetsTargetIdScansIdCancelIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scansHandler = app
  .openapi(getTargetsAllScansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdScanNowIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansDatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansRetrievePageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdScansIdCancelIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdReportDefaultIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdReportOwaspIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdReportPciIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
