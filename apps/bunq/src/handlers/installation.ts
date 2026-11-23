import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInstallationInstallationIDServerPublicKeyRoute,
  getInstallationItemIdRoute,
  getInstallationRoute,
  postInstallationRoute,
} from '../routes'

export const postInstallationRouteHandler: RouteHandler<typeof postInstallationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInstallationRouteHandler: RouteHandler<typeof getInstallationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstallationItemIdRouteHandler: RouteHandler<
  typeof getInstallationItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstallationInstallationIDServerPublicKeyRouteHandler: RouteHandler<
  typeof getInstallationInstallationIDServerPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
