import type { RouteHandler } from '@hono/zod-openapi'
import type { getAvatarItemIdRoute, postAvatarRoute } from '../routes'

export const postAvatarRouteHandler: RouteHandler<typeof postAvatarRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAvatarItemIdRouteHandler: RouteHandler<typeof getAvatarItemIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
