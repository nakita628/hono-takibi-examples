import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReleasesAgentVersionRoute,
  getReleasesPlatformVersionRoute,
  getReleasesScannerVersionRoute,
} from '../routes'

export const getReleasesAgentVersionRouteHandler: RouteHandler<
  typeof getReleasesAgentVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReleasesPlatformVersionRouteHandler: RouteHandler<
  typeof getReleasesPlatformVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReleasesScannerVersionRouteHandler: RouteHandler<
  typeof getReleasesScannerVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
