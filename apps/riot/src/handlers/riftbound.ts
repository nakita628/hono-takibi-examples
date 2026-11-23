import type { RouteHandler } from '@hono/zod-openapi'
import type { getRiftboundContentV1ContentsRoute } from '../routes'

export const getRiftboundContentV1ContentsRouteHandler: RouteHandler<
  typeof getRiftboundContentV1ContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
