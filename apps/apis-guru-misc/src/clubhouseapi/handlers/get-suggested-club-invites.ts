import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetSuggestedClubInvitesRoute } from '../routes'

export const postGetSuggestedClubInvitesRouteHandler: RouteHandler<
  typeof postGetSuggestedClubInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
