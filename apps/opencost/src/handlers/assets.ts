import type { RouteHandler } from '@hono/zod-openapi'
import type { getAssetsRoute } from '../routes'

export const getAssetsRouteHandler: RouteHandler<typeof getAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}
