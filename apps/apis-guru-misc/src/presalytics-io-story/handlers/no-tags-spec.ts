import type { RouteHandler } from '@hono/zod-openapi'
import type { getNoTagsSpecRoute } from '../routes'

export const getNoTagsSpecRouteHandler: RouteHandler<typeof getNoTagsSpecRoute> = async (c) => {
  throw new Error('Not implemented')
}
