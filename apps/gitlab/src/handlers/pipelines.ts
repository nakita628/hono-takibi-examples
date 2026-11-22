import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdPipelinesPipelineIdRoute,
  getApiV4PipelinesRoute,
  getApiV4ProjectsIdPipelinesLatestRoute,
  getApiV4ProjectsIdPipelinesPipelineIdBridgesRoute,
  getApiV4ProjectsIdPipelinesPipelineIdJobsRoute,
  getApiV4ProjectsIdPipelinesPipelineIdRoute,
  getApiV4ProjectsIdPipelinesPipelineIdTestReportRoute,
  getApiV4ProjectsIdPipelinesPipelineIdTestReportSummaryRoute,
  getApiV4ProjectsIdPipelinesPipelineIdTriggerJobsRoute,
  getApiV4ProjectsIdPipelinesPipelineIdVariablesRoute,
  getApiV4ProjectsIdPipelinesRoute,
  postApiV4ProjectsIdPipelineRoute,
  postApiV4ProjectsIdPipelinesPipelineIdCancelRoute,
  postApiV4ProjectsIdPipelinesPipelineIdRetryRoute,
  putApiV4ProjectsIdPipelinesPipelineIdMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pipelinesHandler = app
  .openapi(getApiV4PipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPipelinesPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesPipelineIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesPipelineIdBridgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesPipelineIdTriggerJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesPipelineIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesPipelineIdTestReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelinesPipelineIdTestReportSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPipelinesPipelineIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPipelinesPipelineIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPipelinesPipelineIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
