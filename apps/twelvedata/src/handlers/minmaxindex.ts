import type { RouteHandler } from '@hono/zod-openapi'
import type { getMinmaxindexRoute } from '../routes'

export const getMinmaxindexRouteHandler: RouteHandler<typeof getMinmaxindexRoute> = async (c) => {
  throw new Error('Not implemented')
}
