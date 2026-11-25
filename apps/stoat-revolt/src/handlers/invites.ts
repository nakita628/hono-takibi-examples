import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInvitesTargetRoute,
  postInvitesTargetRoute,
  deleteInvitesTargetRoute,
} from '../routes'

export const getInvitesTargetRouteHandler: RouteHandler<typeof getInvitesTargetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postInvitesTargetRouteHandler: RouteHandler<typeof postInvitesTargetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteInvitesTargetRouteHandler: RouteHandler<
  typeof deleteInvitesTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
