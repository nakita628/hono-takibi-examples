import type { RouteHandler } from '@hono/zod-openapi'
import type { getUuidRoute, getUuidVersionVersionRoute, postUuidRoute } from '../routes'

export const getUuidRouteHandler: RouteHandler<typeof getUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUuidRouteHandler: RouteHandler<typeof postUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUuidVersionVersionRouteHandler: RouteHandler<
  typeof getUuidVersionVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
