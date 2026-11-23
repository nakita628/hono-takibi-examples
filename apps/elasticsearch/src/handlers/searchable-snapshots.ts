import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchableSnapshotsCacheStatsRoute,
  getSearchableSnapshotsNodeIdCacheStatsRoute,
  getSearchableSnapshotsStatsRoute,
  postSearchableSnapshotsCacheClearRoute,
} from '../routes'

export const getSearchableSnapshotsCacheStatsRouteHandler: RouteHandler<
  typeof getSearchableSnapshotsCacheStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchableSnapshotsNodeIdCacheStatsRouteHandler: RouteHandler<
  typeof getSearchableSnapshotsNodeIdCacheStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchableSnapshotsCacheClearRouteHandler: RouteHandler<
  typeof postSearchableSnapshotsCacheClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchableSnapshotsStatsRouteHandler: RouteHandler<
  typeof getSearchableSnapshotsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
