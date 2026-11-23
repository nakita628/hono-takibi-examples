import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetReadOnlyIDRoute, postGetReadOnlyIDRoute } from '../routes'

export const getGetReadOnlyIDRouteHandler: RouteHandler<typeof getGetReadOnlyIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGetReadOnlyIDRouteHandler: RouteHandler<typeof postGetReadOnlyIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
