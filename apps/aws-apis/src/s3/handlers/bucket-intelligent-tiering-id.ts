import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketIntelligentTieringIdRoute,
  getBucketIntelligentTieringIdRoute,
  putBucketIntelligentTieringIdRoute,
} from '../routes'

export const deleteBucketIntelligentTieringIdRouteHandler: RouteHandler<
  typeof deleteBucketIntelligentTieringIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketIntelligentTieringIdRouteHandler: RouteHandler<
  typeof getBucketIntelligentTieringIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketIntelligentTieringIdRouteHandler: RouteHandler<
  typeof putBucketIntelligentTieringIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
