import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeleporterRoute, postTeleporterRoute } from '../routes'

export const getTeleporterRouteHandler: RouteHandler<typeof getTeleporterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTeleporterRouteHandler: RouteHandler<typeof postTeleporterRoute> = async (c) => {
  throw new Error('Not implemented')
}
