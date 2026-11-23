import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOwnershipOwnershipIdRoute,
  getOwnershipRoute,
  patchOwnershipOwnershipIdRoute,
  postOwnershipInstallRoute,
  postOwnershipOwnershipIdRoute,
  postOwnershipUninstallOwnershipIdRoute,
} from '../routes'

export const getOwnershipRouteHandler: RouteHandler<typeof getOwnershipRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOwnershipInstallRouteHandler: RouteHandler<
  typeof postOwnershipInstallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOwnershipUninstallOwnershipIdRouteHandler: RouteHandler<
  typeof postOwnershipUninstallOwnershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOwnershipOwnershipIdRouteHandler: RouteHandler<
  typeof getOwnershipOwnershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOwnershipOwnershipIdRouteHandler: RouteHandler<
  typeof patchOwnershipOwnershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOwnershipOwnershipIdRouteHandler: RouteHandler<
  typeof postOwnershipOwnershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
