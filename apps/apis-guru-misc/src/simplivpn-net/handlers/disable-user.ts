import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisableUserRoute } from '../routes'

export const postDisableUserRouteHandler: RouteHandler<typeof postDisableUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
