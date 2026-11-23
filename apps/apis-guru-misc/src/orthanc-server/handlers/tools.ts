import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getToolsAcceptedTransferSyntaxesRoute,
  getToolsDefaultEncodingRoute,
  getToolsDicomConformanceRoute,
  getToolsGenerateUidRoute,
  getToolsLogLevelDicomRoute,
  getToolsLogLevelGenericRoute,
  getToolsLogLevelHttpRoute,
  getToolsLogLevelJobsRoute,
  getToolsLogLevelLuaRoute,
  getToolsLogLevelPluginsRoute,
  getToolsLogLevelRoute,
  getToolsLogLevelSqliteRoute,
  getToolsMetricsPrometheusRoute,
  getToolsMetricsRoute,
  getToolsNowLocalRoute,
  getToolsNowRoute,
  getToolsRoute,
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
  putToolsLogLevelDicomRoute,
  putToolsLogLevelGenericRoute,
  putToolsLogLevelHttpRoute,
  putToolsLogLevelJobsRoute,
  putToolsLogLevelLuaRoute,
  putToolsLogLevelPluginsRoute,
  putToolsLogLevelRoute,
  putToolsLogLevelSqliteRoute,
  putToolsMetricsRoute,
  putToolsUnknownSopClassAcceptedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const toolsHandler = app
  .openapi(getToolsRoute, (c) => {
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
  .openapi(getToolsLogLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelDicomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelDicomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelGenericRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelGenericRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelHttpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelHttpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelLuaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelLuaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelSqliteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelSqliteRoute, (c) => {
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
