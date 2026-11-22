import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SqllabExportClientIdIndexRoute,
  getApiV1SqllabIndexRoute,
  getApiV1SqllabResultsIndexRoute,
  postApiV1SqllabEstimateIndexRoute,
  postApiV1SqllabExecuteIndexRoute,
  postApiV1SqllabExportStreamingIndexRoute,
  postApiV1SqllabFormatSqlIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sqlLabHandler = app
  .openapi(getApiV1SqllabIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabEstimateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabExecuteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SqllabExportClientIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabExportStreamingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabFormatSqlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SqllabResultsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
