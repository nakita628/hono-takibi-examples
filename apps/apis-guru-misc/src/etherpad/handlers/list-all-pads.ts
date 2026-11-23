import type { RouteHandler } from '@hono/zod-openapi'
import type { getListAllPadsRoute, postListAllPadsRoute } from '../routes'

export const getListAllPadsRouteHandler: RouteHandler<typeof getListAllPadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postListAllPadsRouteHandler: RouteHandler<typeof postListAllPadsRoute> = async (c) => {
  throw new Error('Not implemented')
}
