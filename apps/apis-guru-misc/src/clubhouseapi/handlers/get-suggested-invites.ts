import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetSuggestedInvitesRoute } from '../routes'

export const postGetSuggestedInvitesRouteHandler: RouteHandler<
  typeof postGetSuggestedInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
