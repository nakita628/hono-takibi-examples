import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateFleetRoute } from '../routes'

export const postCreateFleetRouteHandler: RouteHandler<typeof postCreateFleetRoute> = async (c) => {
  throw new Error('Not implemented')
}
