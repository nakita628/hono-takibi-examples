import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionObjectStorageBucketsRegionIdBucketSslRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketSslRoute,
  postApiVersionObjectStorageBucketsRegionIdBucketSslRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tlssslCertificatesHandler = app
  .openapi(postApiVersionObjectStorageBucketsRegionIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionObjectStorageBucketsRegionIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
