import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveSourceIdentifierFromSubscriptionRoute,
  postActionRemoveSourceIdentifierFromSubscriptionRoute,
} from '../routes'

export const getActionRemoveSourceIdentifierFromSubscriptionRouteHandler: RouteHandler<
  typeof getActionRemoveSourceIdentifierFromSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveSourceIdentifierFromSubscriptionRouteHandler: RouteHandler<
  typeof postActionRemoveSourceIdentifierFromSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
