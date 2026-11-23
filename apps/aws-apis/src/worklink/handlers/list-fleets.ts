import type { RouteHandler } from '@hono/zod-openapi'
import type { postListFleetsRoute } from '../routes'

export const postListFleetsRouteHandler: RouteHandler<typeof postListFleetsRoute> = async (c) => {
  throw new Error('Not implemented')
}
