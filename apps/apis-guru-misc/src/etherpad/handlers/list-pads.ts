import type { RouteHandler } from '@hono/zod-openapi'
import type { getListPadsRoute, postListPadsRoute } from '../routes'

export const getListPadsRouteHandler: RouteHandler<typeof getListPadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postListPadsRouteHandler: RouteHandler<typeof postListPadsRoute> = async (c) => {
  throw new Error('Not implemented')
}
