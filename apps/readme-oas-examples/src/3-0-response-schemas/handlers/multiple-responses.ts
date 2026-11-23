import type { RouteHandler } from '@hono/zod-openapi'
import type { getMultipleResponsesObjectRoute } from '../routes'

export const getMultipleResponsesObjectRouteHandler: RouteHandler<
  typeof getMultipleResponsesObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
