import type { RouteHandler } from '@hono/zod-openapi'
import type { getPassportsIdRoute, postPassportsIdRoute } from '../routes'

export const getPassportsIdRouteHandler: RouteHandler<typeof getPassportsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPassportsIdRouteHandler: RouteHandler<typeof postPassportsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
