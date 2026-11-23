import type { RouteHandler } from '@hono/zod-openapi'
import type { postInviteToAppRoute } from '../routes'

export const postInviteToAppRouteHandler: RouteHandler<typeof postInviteToAppRoute> = async (c) => {
  throw new Error('Not implemented')
}
