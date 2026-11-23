import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateGroupRoute } from '../routes'

export const postCreateGroupRouteHandler: RouteHandler<typeof postCreateGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}
