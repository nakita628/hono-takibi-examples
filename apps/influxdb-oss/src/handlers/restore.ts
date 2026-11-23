import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postRestoreBucketBucketIDRoute,
  postRestoreBucketMetadataRoute,
  postRestoreKvRoute,
  postRestoreShardsShardIDRoute,
  postRestoreSqlRoute,
} from '../routes'

export const postRestoreKvRouteHandler: RouteHandler<typeof postRestoreKvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestoreSqlRouteHandler: RouteHandler<typeof postRestoreSqlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestoreBucketBucketIDRouteHandler: RouteHandler<
  typeof postRestoreBucketBucketIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestoreBucketMetadataRouteHandler: RouteHandler<
  typeof postRestoreBucketMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestoreShardsShardIDRouteHandler: RouteHandler<
  typeof postRestoreShardsShardIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
