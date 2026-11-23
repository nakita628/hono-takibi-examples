import type { RouteHandler } from '@hono/zod-openapi'
import type {
  putConfigureLogsChannelRoute,
  putConfigureLogsPlaybackConfigurationRoute,
} from '../routes'

export const putConfigureLogsChannelRouteHandler: RouteHandler<
  typeof putConfigureLogsChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConfigureLogsPlaybackConfigurationRouteHandler: RouteHandler<
  typeof putConfigureLogsPlaybackConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
