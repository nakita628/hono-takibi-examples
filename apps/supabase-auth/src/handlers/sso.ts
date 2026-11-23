import type { RouteHandler } from '@hono/zod-openapi'
import type { postSsoRoute } from '../routes'

export const postSsoRouteHandler: RouteHandler<typeof postSsoRoute> = async (c) => {
  throw new Error('Not implemented')
}
