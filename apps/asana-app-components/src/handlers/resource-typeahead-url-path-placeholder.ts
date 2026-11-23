import type { RouteHandler } from '@hono/zod-openapi'
import type { getResourceTypeaheadUrlPathPlaceholderRoute } from '../routes'

export const getResourceTypeaheadUrlPathPlaceholderRouteHandler: RouteHandler<
  typeof getResourceTypeaheadUrlPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
