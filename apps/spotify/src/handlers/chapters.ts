import type { RouteHandler } from '@hono/zod-openapi'
import type { getChaptersIdRoute, getChaptersRoute } from '../routes'

export const getChaptersIdRouteHandler: RouteHandler<typeof getChaptersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChaptersRouteHandler: RouteHandler<typeof getChaptersRoute> = async (c) => {
  throw new Error('Not implemented')
}
