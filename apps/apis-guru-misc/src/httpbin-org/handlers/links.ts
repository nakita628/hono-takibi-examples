import type { RouteHandler } from '@hono/zod-openapi'
import type { getLinksNOffsetRoute } from '../routes'

export const getLinksNOffsetRouteHandler: RouteHandler<typeof getLinksNOffsetRoute> = async (c) => {
  throw new Error('Not implemented')
}
