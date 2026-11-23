import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserRoute, putUserRoute } from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserRouteHandler: RouteHandler<typeof putUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
