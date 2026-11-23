import type { RouteHandler } from '@hono/zod-openapi'
import type { getListJsonRoute } from '../routes'

export const getListJsonRouteHandler: RouteHandler<typeof getListJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
