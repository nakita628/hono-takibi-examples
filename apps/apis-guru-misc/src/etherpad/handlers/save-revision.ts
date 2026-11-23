import type { RouteHandler } from '@hono/zod-openapi'
import type { getSaveRevisionRoute, postSaveRevisionRoute } from '../routes'

export const getSaveRevisionRouteHandler: RouteHandler<typeof getSaveRevisionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSaveRevisionRouteHandler: RouteHandler<typeof postSaveRevisionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
