import type { RouteHandler } from '@hono/zod-openapi'
import type { postInvitesCreateMultipleJsonRoute } from '../routes'

export const postInvitesCreateMultipleJsonRouteHandler: RouteHandler<
  typeof postInvitesCreateMultipleJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
