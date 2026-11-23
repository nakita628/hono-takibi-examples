import type { RouteHandler } from '@hono/zod-openapi'
import type { postListImportsRoute } from '../routes'

export const postListImportsRouteHandler: RouteHandler<typeof postListImportsRoute> = async (c) => {
  throw new Error('Not implemented')
}
