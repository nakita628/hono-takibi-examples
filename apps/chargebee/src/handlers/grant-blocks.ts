import type { RouteHandler } from '@hono/zod-openapi'
import type { getGrantBlocksRoute } from '../routes'

export const getGrantBlocksRouteHandler: RouteHandler<typeof getGrantBlocksRoute> = async (c) => {
  throw new Error('Not implemented')
}
