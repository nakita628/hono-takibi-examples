import type { RouteHandler } from '@hono/zod-openapi'
import type { postListExportsRoute } from '../routes'

export const postListExportsRouteHandler: RouteHandler<typeof postListExportsRoute> = async (c) => {
  throw new Error('Not implemented')
}
