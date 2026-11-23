import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteStylesPathRoute, getStylesPathRoute, patchStylesPathRoute } from '../routes'

export const deleteStylesPathRouteHandler: RouteHandler<typeof deleteStylesPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStylesPathRouteHandler: RouteHandler<typeof getStylesPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStylesPathRouteHandler: RouteHandler<typeof patchStylesPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
