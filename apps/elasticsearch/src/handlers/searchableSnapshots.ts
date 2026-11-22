import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexSearchableSnapshotsStatsRoute,
  getSearchableSnapshotsCacheStatsRoute,
  getSearchableSnapshotsNodeIdCacheStatsRoute,
  getSearchableSnapshotsStatsRoute,
  postIndexSearchableSnapshotsCacheClearRoute,
  postSearchableSnapshotsCacheClearRoute,
  postSnapshotRepositorySnapshotMountRoute,
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
  .openapi(postIndexSearchableSnapshotsCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotRepositorySnapshotMountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchableSnapshotsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSearchableSnapshotsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
