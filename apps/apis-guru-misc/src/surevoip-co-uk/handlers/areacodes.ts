import type { RouteHandler } from '@hono/zod-openapi'
import type { getAreacodesRoute } from '../routes'

export const getAreacodesRouteHandler: RouteHandler<typeof getAreacodesRoute> = async (c) => {
  throw new Error('Not implemented')
}
