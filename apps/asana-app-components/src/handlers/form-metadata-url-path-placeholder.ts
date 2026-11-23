import type { RouteHandler } from '@hono/zod-openapi'
import type { getFormMetadataUrlPathPlaceholderRoute } from '../routes'

export const getFormMetadataUrlPathPlaceholderRouteHandler: RouteHandler<
  typeof getFormMetadataUrlPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
