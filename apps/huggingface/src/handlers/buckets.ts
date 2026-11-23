import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketsNamespaceRepoResolvePathRoute } from '../routes'

export const getBucketsNamespaceRepoResolvePathRouteHandler: RouteHandler<
  typeof getBucketsNamespaceRepoResolvePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
