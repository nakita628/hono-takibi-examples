import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUnsubscribeRoute, postActionUnsubscribeRoute } from '../routes'

export const getActionUnsubscribeRouteHandler: RouteHandler<
  typeof getActionUnsubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUnsubscribeRouteHandler: RouteHandler<
  typeof postActionUnsubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
