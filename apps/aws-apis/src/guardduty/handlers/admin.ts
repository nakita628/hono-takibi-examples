import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdminRoute, postAdminDisableRoute, postAdminEnableRoute } from '../routes'

export const postAdminDisableRouteHandler: RouteHandler<typeof postAdminDisableRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminEnableRouteHandler: RouteHandler<typeof postAdminEnableRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRouteHandler: RouteHandler<typeof getAdminRoute> = async (c) => {
  throw new Error('Not implemented')
}
