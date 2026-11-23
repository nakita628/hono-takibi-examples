import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRestoreBucketBucketIDRoute,
  postRestoreBucketMetadataRoute,
  postRestoreKvRoute,
  postRestoreShardsShardIDRoute,
  postRestoreSqlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restoreHandler = app
  .openapi(postRestoreKvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestoreSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestoreBucketBucketIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestoreBucketMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestoreShardsShardIDRoute, (c) => {
    throw new Error('Not implemented')
  })
