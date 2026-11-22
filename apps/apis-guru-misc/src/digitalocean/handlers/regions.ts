import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2RegionsRoute } from '../routes'

export const getV2RegionsRouteHandler: RouteHandler<typeof getV2RegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
