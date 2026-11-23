import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMobilePushE2eeTestNotificationRoute,
  postMobilePushRegisterRoute,
  postMobilePushTestNotificationRoute,
} from '../routes'

export const postMobilePushTestNotificationRouteHandler: RouteHandler<
  typeof postMobilePushTestNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMobilePushE2eeTestNotificationRouteHandler: RouteHandler<
  typeof postMobilePushE2eeTestNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMobilePushRegisterRouteHandler: RouteHandler<
  typeof postMobilePushRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
