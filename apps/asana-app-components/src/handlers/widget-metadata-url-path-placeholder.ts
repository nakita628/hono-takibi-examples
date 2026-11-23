import type { RouteHandler } from '@hono/zod-openapi'
import type { getWidgetMetadataUrlPathPlaceholderRoute } from '../routes'

export const getWidgetMetadataUrlPathPlaceholderRouteHandler: RouteHandler<
  typeof getWidgetMetadataUrlPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
