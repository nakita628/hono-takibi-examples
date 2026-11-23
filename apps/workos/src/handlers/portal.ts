import type { RouteHandler } from '@hono/zod-openapi'
import type { postPortalGenerateLinkRoute, postPortalRevokeLinkRoute } from '../routes'

export const postPortalGenerateLinkRouteHandler: RouteHandler<
  typeof postPortalGenerateLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortalRevokeLinkRouteHandler: RouteHandler<
  typeof postPortalRevokeLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
