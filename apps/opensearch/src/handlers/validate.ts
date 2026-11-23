import type { RouteHandler } from '@hono/zod-openapi'
import type { getValidateQueryRoute, postValidateQueryRoute } from '../routes'

export const getValidateQueryRouteHandler: RouteHandler<typeof getValidateQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postValidateQueryRouteHandler: RouteHandler<typeof postValidateQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
