import type { RouteHandler } from '@hono/zod-openapi'
import type { postEnableUserRoute } from '../routes'

export const postEnableUserRouteHandler: RouteHandler<typeof postEnableUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
