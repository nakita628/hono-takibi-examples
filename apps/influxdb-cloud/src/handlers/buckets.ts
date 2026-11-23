import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketsBucketIDLabelsLabelIDRoute,
  deleteBucketsBucketIDMembersUserIDRoute,
  deleteBucketsBucketIDOwnersUserIDRoute,
  deleteBucketsBucketIDRoute,
  getBucketsBucketIDLabelsRoute,
  getBucketsBucketIDMembersRoute,
  getBucketsBucketIDOwnersRoute,
  getBucketsBucketIDRoute,
  getBucketsBucketIDSchemaMeasurementsMeasurementIDRoute,
  getBucketsBucketIDSchemaMeasurementsRoute,
  getBucketsRoute,
  patchBucketsBucketIDRoute,
  patchBucketsBucketIDSchemaMeasurementsMeasurementIDRoute,
  postBucketsBucketIDLabelsRoute,
  postBucketsBucketIDMembersRoute,
  postBucketsBucketIDOwnersRoute,
  postBucketsBucketIDSchemaMeasurementsRoute,
  postBucketsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketsHandler = app
  .openapi(getBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBucketsBucketIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBucketsBucketIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketsBucketIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBucketsBucketIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketsBucketIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBucketsBucketIDMembersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBucketsBucketIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBucketsBucketIDOwnersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
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
