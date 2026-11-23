import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetCurationTagsByNameRoute } from '../routes'

export const getGetCurationTagsByNameRouteHandler: RouteHandler<
  typeof getGetCurationTagsByNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
