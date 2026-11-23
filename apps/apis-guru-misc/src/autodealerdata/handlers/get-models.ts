import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetModelsRoute } from '../routes'

export const getGetModelsRouteHandler: RouteHandler<typeof getGetModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
