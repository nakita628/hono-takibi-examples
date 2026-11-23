import type { RouteHandler } from '@hono/zod-openapi'
import type { getContainersNamespaceRepoResolvePathRoute } from '../routes'

export const getContainersNamespaceRepoResolvePathRouteHandler: RouteHandler<
  typeof getContainersNamespaceRepoResolvePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
