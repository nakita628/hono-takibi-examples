import type { RouteHandler } from '@hono/zod-openapi'
import type { postConfigRoute } from '../routes'

export const postConfigRouteHandler: RouteHandler<typeof postConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}
