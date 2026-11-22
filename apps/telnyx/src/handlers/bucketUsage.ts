import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStorageBucketsBucketNameUsageApiRoute,
  getStorageBucketsBucketNameUsageStorageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketUsageHandler = app
  .openapi(getStorageBucketsBucketNameUsageApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageBucketsBucketNameUsageStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
