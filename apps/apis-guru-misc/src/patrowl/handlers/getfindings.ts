import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetfindingsScanIdRoute } from '../routes'

export const getGetfindingsScanIdRouteHandler: RouteHandler<
  typeof getGetfindingsScanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
