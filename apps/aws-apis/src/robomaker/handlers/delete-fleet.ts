import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteFleetRoute } from '../routes'

export const postDeleteFleetRouteHandler: RouteHandler<typeof postDeleteFleetRoute> = async (c) => {
  throw new Error('Not implemented')
}
