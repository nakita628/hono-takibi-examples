import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchableSnapshotsCacheStatsRoute,
  getSearchableSnapshotsNodeIdCacheStatsRoute,
  getSearchableSnapshotsStatsRoute,
  postSearchableSnapshotsCacheClearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchableSnapshotsHandler = app
  .openapi(getSearchableSnapshotsCacheStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchableSnapshotsNodeIdCacheStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchableSnapshotsCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchableSnapshotsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
