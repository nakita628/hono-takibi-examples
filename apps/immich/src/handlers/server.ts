import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getServerAboutRoute,
  getServerApkLinksRoute,
  getServerConfigRoute,
  getServerFeaturesRoute,
  deleteServerLicenseRoute,
  getServerLicenseRoute,
  putServerLicenseRoute,
  getServerMediaTypesRoute,
  getServerPingRoute,
  getServerStatisticsRoute,
  getServerStorageRoute,
  getServerVersionRoute,
  getServerVersionCheckRoute,
  getServerVersionHistoryRoute,
} from '../routes'

export const getServerAboutRouteHandler: RouteHandler<typeof getServerAboutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerApkLinksRouteHandler: RouteHandler<typeof getServerApkLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServerConfigRouteHandler: RouteHandler<typeof getServerConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerFeaturesRouteHandler: RouteHandler<typeof getServerFeaturesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteServerLicenseRouteHandler: RouteHandler<
  typeof deleteServerLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerLicenseRouteHandler: RouteHandler<typeof getServerLicenseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putServerLicenseRouteHandler: RouteHandler<typeof putServerLicenseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServerMediaTypesRouteHandler: RouteHandler<
  typeof getServerMediaTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerPingRouteHandler: RouteHandler<typeof getServerPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerStatisticsRouteHandler: RouteHandler<
  typeof getServerStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerStorageRouteHandler: RouteHandler<typeof getServerStorageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServerVersionRouteHandler: RouteHandler<typeof getServerVersionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServerVersionCheckRouteHandler: RouteHandler<
  typeof getServerVersionCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServerVersionHistoryRouteHandler: RouteHandler<
  typeof getServerVersionHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
