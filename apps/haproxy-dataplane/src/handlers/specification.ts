import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpecificationRoute } from '../routes'

export const getSpecificationRouteHandler: RouteHandler<typeof getSpecificationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
