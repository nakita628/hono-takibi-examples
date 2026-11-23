import type { RouteHandler } from '@hono/zod-openapi'
import type { getLinksRoute } from '../routes'

export const getLinksRouteHandler: RouteHandler<typeof getLinksRoute> = async (c) => {
  throw new Error('Not implemented')
}
