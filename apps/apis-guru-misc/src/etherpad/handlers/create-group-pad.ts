import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreateGroupPadRoute, postCreateGroupPadRoute } from '../routes'

export const getCreateGroupPadRouteHandler: RouteHandler<typeof getCreateGroupPadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCreateGroupPadRouteHandler: RouteHandler<typeof postCreateGroupPadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
