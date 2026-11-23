import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePackagesInstallingPackageIdRoute,
  getPackagesNameRoute,
  getPackagesRoute,
  postPackagesInstalledNameRoute,
} from '../routes'

export const getPackagesRouteHandler: RouteHandler<typeof getPackagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPackagesInstalledNameRouteHandler: RouteHandler<
  typeof postPackagesInstalledNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePackagesInstallingPackageIdRouteHandler: RouteHandler<
  typeof deletePackagesInstallingPackageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPackagesNameRouteHandler: RouteHandler<typeof getPackagesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
