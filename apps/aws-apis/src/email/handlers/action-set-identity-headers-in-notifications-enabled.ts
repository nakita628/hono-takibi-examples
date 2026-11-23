import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetIdentityHeadersInNotificationsEnabledRoute,
  postActionSetIdentityHeadersInNotificationsEnabledRoute,
} from '../routes'

export const getActionSetIdentityHeadersInNotificationsEnabledRouteHandler: RouteHandler<
  typeof getActionSetIdentityHeadersInNotificationsEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetIdentityHeadersInNotificationsEnabledRouteHandler: RouteHandler<
  typeof postActionSetIdentityHeadersInNotificationsEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
