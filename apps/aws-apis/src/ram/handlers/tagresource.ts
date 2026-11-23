import type { RouteHandler } from '@hono/zod-openapi'
import type { postTagresourceRoute } from '../routes'

export const postTagresourceRouteHandler: RouteHandler<typeof postTagresourceRoute> = async (c) => {
  throw new Error('Not implemented')
}
