import type { RouteHandler } from '@hono/zod-openapi'
import type { getLastChangeEndpointRoute } from '../routes'

export const getLastChangeEndpointRouteHandler: RouteHandler<
  typeof getLastChangeEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
