import type { RouteHandler } from '@hono/zod-openapi'
import type { getContentClassificationLabelsRoute } from '../routes'

export const getContentClassificationLabelsRouteHandler: RouteHandler<
  typeof getContentClassificationLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
