import type { RouteHandler } from '@hono/zod-openapi'
import type { getStyleguideRoute, postStyleguideRoute } from '../routes'

export const getStyleguideRouteHandler: RouteHandler<typeof getStyleguideRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStyleguideRouteHandler: RouteHandler<typeof postStyleguideRoute> = async (c) => {
  throw new Error('Not implemented')
}
