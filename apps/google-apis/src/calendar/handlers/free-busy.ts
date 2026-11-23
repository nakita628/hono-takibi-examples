import type { RouteHandler } from '@hono/zod-openapi'
import type { postFreeBusyRoute } from '../routes'

export const postFreeBusyRouteHandler: RouteHandler<typeof postFreeBusyRoute> = async (c) => {
  throw new Error('Not implemented')
}
