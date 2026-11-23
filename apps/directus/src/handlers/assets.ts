import type { RouteHandler } from '@hono/zod-openapi'
import type { getAssetsIdRoute } from '../routes'

export const getAssetsIdRouteHandler: RouteHandler<typeof getAssetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
