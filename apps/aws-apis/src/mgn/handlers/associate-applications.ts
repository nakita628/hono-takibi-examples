import type { RouteHandler } from '@hono/zod-openapi'
import type { postAssociateApplicationsRoute } from '../routes'

export const postAssociateApplicationsRouteHandler: RouteHandler<
  typeof postAssociateApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
