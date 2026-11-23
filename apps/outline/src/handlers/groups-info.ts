import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsInfoRoute } from '../routes'

export const postGroupsInfoRouteHandler: RouteHandler<typeof postGroupsInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
