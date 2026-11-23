import type { RouteHandler } from '@hono/zod-openapi'
import type { postListConnectorsRoute } from '../routes'

export const postListConnectorsRouteHandler: RouteHandler<typeof postListConnectorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
