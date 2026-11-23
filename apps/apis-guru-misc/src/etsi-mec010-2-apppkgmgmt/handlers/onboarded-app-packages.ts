import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOnboardedAppPackagesAppDIdAppdRoute,
  getOnboardedAppPackagesAppDIdPackageContentRoute,
  putOnboardedAppPackagesAppDIdPackageContentRoute,
} from '../routes'

export const getOnboardedAppPackagesAppDIdAppdRouteHandler: RouteHandler<
  typeof getOnboardedAppPackagesAppDIdAppdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOnboardedAppPackagesAppDIdPackageContentRouteHandler: RouteHandler<
  typeof getOnboardedAppPackagesAppDIdPackageContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOnboardedAppPackagesAppDIdPackageContentRouteHandler: RouteHandler<
  typeof putOnboardedAppPackagesAppDIdPackageContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
