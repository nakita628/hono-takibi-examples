import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteClusterRegistrationsNameRoute, postClusterRegistrationsRoute } from '../routes'

export const deleteClusterRegistrationsNameRouteHandler: RouteHandler<
  typeof deleteClusterRegistrationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterRegistrationsRouteHandler: RouteHandler<
  typeof postClusterRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
