import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1ParentChannelsRoute,
  getV1ParentPlatformsRoute,
  getV1ParentReleasesRoute,
  getV1ParentVersionsRoute,
} from '../routes'

export const getV1ParentChannelsRouteHandler: RouteHandler<
  typeof getV1ParentChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentPlatformsRouteHandler: RouteHandler<
  typeof getV1ParentPlatformsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentReleasesRouteHandler: RouteHandler<
  typeof getV1ParentReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentVersionsRouteHandler: RouteHandler<
  typeof getV1ParentVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
