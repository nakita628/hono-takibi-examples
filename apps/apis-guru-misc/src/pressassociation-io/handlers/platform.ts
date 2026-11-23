import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPlatformPlatformIdRegionRoute,
  getPlatformPlatformIdRoute,
  getPlatformRoute,
} from '../routes'

export const getPlatformRouteHandler: RouteHandler<typeof getPlatformRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlatformPlatformIdRouteHandler: RouteHandler<
  typeof getPlatformPlatformIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlatformPlatformIdRegionRouteHandler: RouteHandler<
  typeof getPlatformPlatformIdRegionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
