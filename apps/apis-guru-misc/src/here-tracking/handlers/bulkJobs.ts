import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBulkjobsV4DeviceUploadsJobIdResultsRoute,
  getBulkjobsV4DeviceUploadsJobIdStatusRoute,
  getBulkjobsV4DeviceUploadsRoute,
  getBulkjobsV4HealthRoute,
  getBulkjobsV4VersionRoute,
  patchBulkjobsV4DeviceUploadsJobIdRoute,
  postBulkjobsV4DeviceUploadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkJobsHandler = app
  .openapi(getBulkjobsV4DeviceUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkjobsV4DeviceUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBulkjobsV4DeviceUploadsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkjobsV4DeviceUploadsJobIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkjobsV4DeviceUploadsJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkjobsV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkjobsV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
