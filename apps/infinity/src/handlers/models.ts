import type { RouteHandler } from '@hono/zod-openapi'
import type { getModelsRoute } from '../routes'

export const getModelsRouteHandler: RouteHandler<typeof getModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
