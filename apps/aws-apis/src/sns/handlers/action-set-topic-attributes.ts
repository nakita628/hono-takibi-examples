import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetTopicAttributesRoute, postActionSetTopicAttributesRoute } from '../routes'

export const getActionSetTopicAttributesRouteHandler: RouteHandler<
  typeof getActionSetTopicAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetTopicAttributesRouteHandler: RouteHandler<
  typeof postActionSetTopicAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
