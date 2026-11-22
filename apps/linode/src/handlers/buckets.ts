import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionObjectStorageBucketsRegionIdBucketRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketAccessRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketObjectListRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketRoute,
  getApiVersionObjectStorageBucketsRegionIdRoute,
  getApiVersionObjectStorageBucketsRoute,
  postApiVersionObjectStorageBucketsRegionIdBucketAccessRoute,
  postApiVersionObjectStorageBucketsRegionIdBucketObjectUrlRoute,
  postApiVersionObjectStorageBucketsRoute,
  putApiVersionObjectStorageBucketsRegionIdBucketAccessRoute,
  putApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketsHandler = app
  .openapi(postApiVersionObjectStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionObjectStorageBucketsRegionIdBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionObjectStorageBucketsRegionIdBucketAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionObjectStorageBucketsRegionIdBucketAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketObjectListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionObjectStorageBucketsRegionIdBucketObjectUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
