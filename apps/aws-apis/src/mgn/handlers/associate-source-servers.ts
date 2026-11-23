import type { RouteHandler } from '@hono/zod-openapi'
import type { postAssociateSourceServersRoute } from '../routes'

export const postAssociateSourceServersRouteHandler: RouteHandler<
  typeof postAssociateSourceServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
