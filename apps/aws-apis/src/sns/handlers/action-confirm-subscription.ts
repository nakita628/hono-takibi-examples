import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionConfirmSubscriptionRoute,
  postActionConfirmSubscriptionRoute,
} from '../routes'

export const getActionConfirmSubscriptionRouteHandler: RouteHandler<
  typeof getActionConfirmSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionConfirmSubscriptionRouteHandler: RouteHandler<
  typeof postActionConfirmSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
