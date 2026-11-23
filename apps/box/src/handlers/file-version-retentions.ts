import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFileVersionRetentionsFileVersionRetentionIdRoute,
  getFileVersionRetentionsRoute,
} from '../routes'

export const getFileVersionRetentionsRouteHandler: RouteHandler<
  typeof getFileVersionRetentionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFileVersionRetentionsFileVersionRetentionIdRouteHandler: RouteHandler<
  typeof getFileVersionRetentionsFileVersionRetentionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
