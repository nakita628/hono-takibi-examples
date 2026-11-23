import type { RouteHandler } from '@hono/zod-openapi'
import type { getThemesIdRoute, getThemesRoute } from '../routes'

export const getThemesRouteHandler: RouteHandler<typeof getThemesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getThemesIdRouteHandler: RouteHandler<typeof getThemesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
