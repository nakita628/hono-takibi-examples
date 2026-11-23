import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInternalFolderPathsRoute,
  getInternalLogsRawRoute,
  getInternalLogsRoute,
  patchInternalLogsSubscribeRoute,
} from '../routes'

export const getInternalFolderPathsRouteHandler: RouteHandler<
  typeof getInternalFolderPathsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternalLogsRouteHandler: RouteHandler<typeof getInternalLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternalLogsRawRouteHandler: RouteHandler<typeof getInternalLogsRawRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchInternalLogsSubscribeRouteHandler: RouteHandler<
  typeof patchInternalLogsSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
