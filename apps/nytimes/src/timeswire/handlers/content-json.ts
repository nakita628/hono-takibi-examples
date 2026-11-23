import type { RouteHandler } from '@hono/zod-openapi'
import type { getContentJsonRoute } from '../routes'

export const getContentJsonRouteHandler: RouteHandler<typeof getContentJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
