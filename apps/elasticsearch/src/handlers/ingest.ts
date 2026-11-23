import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIngestGeoipDatabaseIdRoute,
  deleteIngestIpLocationDatabaseIdRoute,
  deleteIngestPipelineIdRoute,
  getIngestGeoipDatabaseIdRoute,
  getIngestGeoipDatabaseRoute,
  getIngestGeoipStatsRoute,
  getIngestIndexSimulateRoute,
  getIngestIpLocationDatabaseIdRoute,
  getIngestIpLocationDatabaseRoute,
  getIngestPipelineIdRoute,
  getIngestPipelineIdSimulateRoute,
  getIngestPipelineRoute,
  getIngestPipelineSimulateRoute,
  getIngestProcessorGrokRoute,
  getIngestSimulateRoute,
  postIngestIndexSimulateRoute,
  postIngestPipelineIdSimulateRoute,
  postIngestPipelineSimulateRoute,
  postIngestSimulateRoute,
  putIngestGeoipDatabaseIdRoute,
  putIngestIpLocationDatabaseIdRoute,
  putIngestPipelineIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ingestHandler = app
  .openapi(getIngestGeoipDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIngestGeoipDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIngestGeoipDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestIpLocationDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIngestIpLocationDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIngestIpLocationDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIngestPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIngestPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestGeoipStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestGeoipDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestIpLocationDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestProcessorGrokRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestPipelineSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngestPipelineSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestPipelineIdSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngestPipelineIdSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngestSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIngestIndexSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngestIndexSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
