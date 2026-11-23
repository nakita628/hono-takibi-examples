import type { RouteHandler } from '@hono/zod-openapi'
import type { getInviteTokenValidateRoute, postInviteTokenSignupRoute } from '../routes'

export const getInviteTokenValidateRouteHandler: RouteHandler<
  typeof getInviteTokenValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInviteTokenSignupRouteHandler: RouteHandler<
  typeof postInviteTokenSignupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
