import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegulatoryRequirementsRoute } from '../routes'

export const getRegulatoryRequirementsRouteHandler: RouteHandler<
  typeof getRegulatoryRequirementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
