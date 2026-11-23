import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlaybackConfigurationNameRoute,
  getPlaybackConfigurationNameRoute,
  putPlaybackConfigurationRoute,
} from '../routes'

export const deletePlaybackConfigurationNameRouteHandler: RouteHandler<
  typeof deletePlaybackConfigurationNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaybackConfigurationNameRouteHandler: RouteHandler<
  typeof getPlaybackConfigurationNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPlaybackConfigurationRouteHandler: RouteHandler<
  typeof putPlaybackConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
