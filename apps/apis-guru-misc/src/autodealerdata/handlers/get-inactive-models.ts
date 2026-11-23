import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetInactiveModelsRoute } from '../routes'

export const getGetInactiveModelsRouteHandler: RouteHandler<
  typeof getGetInactiveModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
