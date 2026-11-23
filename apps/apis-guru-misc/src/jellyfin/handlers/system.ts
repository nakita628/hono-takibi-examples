import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSystemActivityLogEntriesRoute,
  getSystemConfigurationKeyRoute,
  getSystemConfigurationMetadataOptionsDefaultRoute,
  getSystemConfigurationRoute,
  getSystemEndpointRoute,
  getSystemInfoPublicRoute,
  getSystemInfoRoute,
  getSystemLogsLogRoute,
  getSystemLogsRoute,
  getSystemPingRoute,
  getSystemWakeOnLanInfoRoute,
  postSystemConfigurationKeyRoute,
  postSystemConfigurationRoute,
  postSystemMediaEncoderPathRoute,
  postSystemPingRoute,
  postSystemRestartRoute,
  postSystemShutdownRoute,
} from '../routes'

export const getSystemActivityLogEntriesRouteHandler: RouteHandler<
  typeof getSystemActivityLogEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemConfigurationRouteHandler: RouteHandler<
  typeof getSystemConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemConfigurationRouteHandler: RouteHandler<
  typeof postSystemConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemConfigurationMetadataOptionsDefaultRouteHandler: RouteHandler<
  typeof getSystemConfigurationMetadataOptionsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemConfigurationKeyRouteHandler: RouteHandler<
  typeof getSystemConfigurationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemConfigurationKeyRouteHandler: RouteHandler<
  typeof postSystemConfigurationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemEndpointRouteHandler: RouteHandler<typeof getSystemEndpointRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSystemInfoRouteHandler: RouteHandler<typeof getSystemInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemInfoPublicRouteHandler: RouteHandler<
  typeof getSystemInfoPublicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemLogsRouteHandler: RouteHandler<typeof getSystemLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemLogsLogRouteHandler: RouteHandler<typeof getSystemLogsLogRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSystemMediaEncoderPathRouteHandler: RouteHandler<
  typeof postSystemMediaEncoderPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemPingRouteHandler: RouteHandler<typeof getSystemPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemPingRouteHandler: RouteHandler<typeof postSystemPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemRestartRouteHandler: RouteHandler<typeof postSystemRestartRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSystemShutdownRouteHandler: RouteHandler<typeof postSystemShutdownRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSystemWakeOnLanInfoRouteHandler: RouteHandler<
  typeof getSystemWakeOnLanInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
