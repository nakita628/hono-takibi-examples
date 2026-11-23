import type { RouteHandler } from '@hono/zod-openapi'
import type { getFacetsRoute } from '../routes'

export const getFacetsRouteHandler: RouteHandler<typeof getFacetsRoute> = async (c) => {
  throw new Error('Not implemented')
}
