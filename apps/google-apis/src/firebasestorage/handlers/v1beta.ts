import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1betaNameRoute,
  getV1betaParentBucketsRoute,
  postV1betaBucketAddFirebaseRoute,
  postV1betaBucketRemoveFirebaseRoute,
} from '../routes'

export const postV1betaBucketAddFirebaseRouteHandler: RouteHandler<
  typeof postV1betaBucketAddFirebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaBucketRemoveFirebaseRouteHandler: RouteHandler<
  typeof postV1betaBucketRemoveFirebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentBucketsRouteHandler: RouteHandler<
  typeof getV1betaParentBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
