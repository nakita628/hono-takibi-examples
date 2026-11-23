import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserTagsRoute } from '../routes'

export const getUserTagsRouteHandler: RouteHandler<typeof getUserTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
