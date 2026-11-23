import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteInstallationTokenRoute, getInstallationRepositoriesRoute } from '../routes'

export const getInstallationRepositoriesRouteHandler: RouteHandler<
  typeof getInstallationRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInstallationTokenRouteHandler: RouteHandler<
  typeof deleteInstallationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
