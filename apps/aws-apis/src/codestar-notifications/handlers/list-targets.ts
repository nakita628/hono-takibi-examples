import type { RouteHandler } from '@hono/zod-openapi'
import type { postListTargetsRoute } from '../routes'

export const postListTargetsRouteHandler: RouteHandler<typeof postListTargetsRoute> = async (c) => {
  throw new Error('Not implemented')
}
