import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubscribeRoute } from '../routes'

export const postSubscribeRouteHandler: RouteHandler<typeof postSubscribeRoute> = async (c) => {
  throw new Error('Not implemented')
}
