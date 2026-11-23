import type { RouteHandler } from '@hono/zod-openapi'
import type { getSelectedMultipleRoute } from '../routes'

export const getSelectedMultipleRouteHandler: RouteHandler<
  typeof getSelectedMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
