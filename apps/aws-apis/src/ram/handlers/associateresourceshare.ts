import type { RouteHandler } from '@hono/zod-openapi'
import type { postAssociateresourceshareRoute } from '../routes'

export const postAssociateresourceshareRouteHandler: RouteHandler<
  typeof postAssociateresourceshareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
