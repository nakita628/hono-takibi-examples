import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenSearchDescriptionRoute } from '../routes'

export const getOpenSearchDescriptionRouteHandler: RouteHandler<
  typeof getOpenSearchDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
