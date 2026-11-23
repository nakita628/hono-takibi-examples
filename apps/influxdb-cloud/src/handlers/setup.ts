import type { RouteHandler } from '@hono/zod-openapi'
import type { getSetupRoute, postSetupRoute, postSetupUserRoute } from '../routes'

export const getSetupRouteHandler: RouteHandler<typeof getSetupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupRouteHandler: RouteHandler<typeof postSetupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetupUserRouteHandler: RouteHandler<typeof postSetupUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
