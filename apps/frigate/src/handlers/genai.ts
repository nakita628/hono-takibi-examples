import type { RouteHandler } from '@hono/zod-openapi'
import type { getGenaiModelsRoute, getGenaiRolesRoute, postGenaiProbeRoute } from '../routes'

export const getGenaiModelsRouteHandler: RouteHandler<typeof getGenaiModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGenaiRolesRouteHandler: RouteHandler<typeof getGenaiRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGenaiProbeRouteHandler: RouteHandler<typeof postGenaiProbeRoute> = async (c) => {
  throw new Error('Not implemented')
}
