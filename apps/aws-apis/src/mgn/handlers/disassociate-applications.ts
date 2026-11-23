import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisassociateApplicationsRoute } from '../routes'

export const postDisassociateApplicationsRouteHandler: RouteHandler<
  typeof postDisassociateApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
