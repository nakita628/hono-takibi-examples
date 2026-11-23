import type { RouteHandler } from '@hono/zod-openapi'
import type { getSksClusterDeprecatedResourcesIdRoute } from '../routes'

export const getSksClusterDeprecatedResourcesIdRouteHandler: RouteHandler<
  typeof getSksClusterDeprecatedResourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
