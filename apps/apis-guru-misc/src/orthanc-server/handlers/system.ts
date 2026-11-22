import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPluginsExplorerJsRoute,
  getPluginsIdRoute,
  getPluginsRoute,
  getStatisticsRoute,
  getSystemRoute,
  getToolsAcceptedTransferSyntaxesRoute,
  getToolsDefaultEncodingRoute,
  getToolsDicomConformanceRoute,
  getToolsGenerateUidRoute,
  getToolsMetricsPrometheusRoute,
  getToolsMetricsRoute,
  getToolsNowLocalRoute,
  getToolsNowRoute,
  getToolsUnknownSopClassAcceptedRoute,
  postToolsBulkAnonymizeRoute,
  postToolsBulkContentRoute,
  postToolsBulkDeleteRoute,
  postToolsBulkModifyRoute,
  postToolsCreateArchiveRoute,
  postToolsCreateDicomRoute,
  postToolsCreateMediaExtendedRoute,
  postToolsCreateMediaRoute,
  postToolsDicomEchoRoute,
  postToolsExecuteScriptRoute,
  postToolsFindRoute,
  postToolsInvalidateTagsRoute,
  postToolsLookupRoute,
  postToolsReconstructRoute,
  postToolsResetRoute,
  postToolsShutdownRoute,
  putToolsAcceptedTransferSyntaxesRoute,
  putToolsDefaultEncodingRoute,
  putToolsMetricsRoute,
  putToolsUnknownSopClassAcceptedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsExplorerJsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsAcceptedTransferSyntaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsAcceptedTransferSyntaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsBulkAnonymizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsBulkContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsBulkModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsCreateArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsCreateDicomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsCreateMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsCreateMediaExtendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsDefaultEncodingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsDefaultEncodingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsDicomConformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsDicomEchoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsExecuteScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsGenerateUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsInvalidateTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsMetricsPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsNowLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsReconstructRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsUnknownSopClassAcceptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsUnknownSopClassAcceptedRoute, (c) => {
    throw new Error('Not implemented')
  })
