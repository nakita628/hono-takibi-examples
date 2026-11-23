import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetCurationTagsRoute } from '../routes'

export const getGetCurationTagsRouteHandler: RouteHandler<typeof getGetCurationTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
