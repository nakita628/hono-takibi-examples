import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVendorAppsAddonIdLogscollectorRoute,
  getVendorAppsAddonIdRoute,
  getVendorAppsRoute,
  postVendorAddonsRoute,
  postVendorAppsAddonIdConsumptionsRoute,
  putVendorAppsAddonIdMigrationCallbackRoute,
  putVendorAppsAddonIdRoute,
} from '../routes'

export const postVendorAddonsRouteHandler: RouteHandler<typeof postVendorAddonsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVendorAppsAddonIdLogscollectorRouteHandler: RouteHandler<
  typeof getVendorAppsAddonIdLogscollectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVendorAppsRouteHandler: RouteHandler<typeof getVendorAppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVendorAppsAddonIdRouteHandler: RouteHandler<
  typeof getVendorAppsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putVendorAppsAddonIdRouteHandler: RouteHandler<
  typeof putVendorAppsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVendorAppsAddonIdConsumptionsRouteHandler: RouteHandler<
  typeof postVendorAppsAddonIdConsumptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putVendorAppsAddonIdMigrationCallbackRouteHandler: RouteHandler<
  typeof putVendorAppsAddonIdMigrationCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
