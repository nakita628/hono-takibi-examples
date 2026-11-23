import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopModelsRoute } from '../routes'

export const getTopModelsRouteHandler: RouteHandler<typeof getTopModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
