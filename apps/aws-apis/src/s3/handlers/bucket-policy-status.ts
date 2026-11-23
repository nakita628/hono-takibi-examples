import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketPolicyStatusRoute } from '../routes'

export const getBucketPolicyStatusRouteHandler: RouteHandler<
  typeof getBucketPolicyStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
