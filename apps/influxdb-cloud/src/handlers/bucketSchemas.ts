import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBucketsBucketIDSchemaMeasurementsMeasurementIDRoute,
  getBucketsBucketIDSchemaMeasurementsRoute,
  patchBucketsBucketIDSchemaMeasurementsMeasurementIDRoute,
  postBucketsBucketIDSchemaMeasurementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketSchemasHandler = app
  .openapi(getBucketsBucketIDSchemaMeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketsBucketIDSchemaMeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIDSchemaMeasurementsMeasurementIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBucketsBucketIDSchemaMeasurementsMeasurementIDRoute, (c) => {
    throw new Error('Not implemented')
  })
