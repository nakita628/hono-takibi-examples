import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrganizationInvitationsRoute } from '../routes'

export const getOrganizationInvitationsRouteHandler: RouteHandler<
  typeof getOrganizationInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
