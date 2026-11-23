import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthConfigRoute } from '../routes'

export const postAuthConfigRouteHandler: RouteHandler<typeof postAuthConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}
