import type { RouteHandler } from '@hono/zod-openapi'
import type { getIllustratorsIllustratorRoute, getIllustratorsRoute } from '../routes'

export const getIllustratorsRouteHandler: RouteHandler<typeof getIllustratorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIllustratorsIllustratorRouteHandler: RouteHandler<
  typeof getIllustratorsIllustratorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
