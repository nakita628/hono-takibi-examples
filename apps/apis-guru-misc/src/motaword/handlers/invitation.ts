import type { RouteHandler } from '@hono/zod-openapi'
import type { postInvitationVendorsRoute } from '../routes'

export const postInvitationVendorsRouteHandler: RouteHandler<
  typeof postInvitationVendorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
