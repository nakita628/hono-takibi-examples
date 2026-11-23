import type { RouteHandler } from '@hono/zod-openapi'
import type { postShortlinkRoute } from '../routes'

export const postShortlinkRouteHandler: RouteHandler<typeof postShortlinkRoute> = async (c) => {
  throw new Error('Not implemented')
}
