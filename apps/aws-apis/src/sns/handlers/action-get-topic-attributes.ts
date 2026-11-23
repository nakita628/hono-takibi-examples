import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetTopicAttributesRoute, postActionGetTopicAttributesRoute } from '../routes'

export const getActionGetTopicAttributesRouteHandler: RouteHandler<
  typeof getActionGetTopicAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetTopicAttributesRouteHandler: RouteHandler<
  typeof postActionGetTopicAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
