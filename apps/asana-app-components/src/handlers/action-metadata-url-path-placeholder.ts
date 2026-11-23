import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionMetadataUrlPathPlaceholderRoute } from '../routes'

export const getActionMetadataUrlPathPlaceholderRouteHandler: RouteHandler<
  typeof getActionMetadataUrlPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
