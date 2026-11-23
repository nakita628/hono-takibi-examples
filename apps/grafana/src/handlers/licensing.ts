import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLicensingTokenRoute,
  getLicensingCheckRoute,
  getLicensingCustomPermissionsCsvRoute,
  getLicensingCustomPermissionsRoute,
  getLicensingRefreshStatsRoute,
  getLicensingTokenRoute,
  postLicensingTokenRenewRoute,
  postLicensingTokenRoute,
} from '../routes'

export const getLicensingCheckRouteHandler: RouteHandler<typeof getLicensingCheckRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLicensingCustomPermissionsRouteHandler: RouteHandler<
  typeof getLicensingCustomPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicensingCustomPermissionsCsvRouteHandler: RouteHandler<
  typeof getLicensingCustomPermissionsCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicensingRefreshStatsRouteHandler: RouteHandler<
  typeof getLicensingRefreshStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLicensingTokenRouteHandler: RouteHandler<
  typeof deleteLicensingTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicensingTokenRouteHandler: RouteHandler<typeof getLicensingTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLicensingTokenRouteHandler: RouteHandler<typeof postLicensingTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLicensingTokenRenewRouteHandler: RouteHandler<
  typeof postLicensingTokenRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
