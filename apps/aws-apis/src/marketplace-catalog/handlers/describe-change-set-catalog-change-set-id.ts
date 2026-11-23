import type { RouteHandler } from '@hono/zod-openapi'
import type { getDescribeChangeSetCatalogChangeSetIdRoute } from '../routes'

export const getDescribeChangeSetCatalogChangeSetIdRouteHandler: RouteHandler<
  typeof getDescribeChangeSetCatalogChangeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
