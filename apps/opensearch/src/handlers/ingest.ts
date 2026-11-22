import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIngestPipelineIdRoute,
  getIngestPipelineIdRoute,
  getIngestPipelineIdSimulateRoute,
  getIngestPipelineRoute,
  getIngestPipelineSimulateRoute,
  getIngestProcessorGrokRoute,
  postIngestPipelineIdSimulateRoute,
  postIngestPipelineSimulateRoute,
  putIngestPipelineIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ingestHandler = app
  .openapi(getIngestPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestPipelineSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngestPipelineSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIngestPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIngestPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestPipelineIdSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngestPipelineIdSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestProcessorGrokRoute, (c) => {
    throw new Error('Not implemented')
  })
