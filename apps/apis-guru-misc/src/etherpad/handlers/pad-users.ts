import type { RouteHandler } from '@hono/zod-openapi'
import type { getPadUsersRoute, postPadUsersRoute } from '../routes'

export const getPadUsersRouteHandler: RouteHandler<typeof getPadUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPadUsersRouteHandler: RouteHandler<typeof postPadUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
