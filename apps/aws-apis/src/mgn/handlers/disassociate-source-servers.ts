import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisassociateSourceServersRoute } from '../routes'

export const postDisassociateSourceServersRouteHandler: RouteHandler<
  typeof postDisassociateSourceServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
