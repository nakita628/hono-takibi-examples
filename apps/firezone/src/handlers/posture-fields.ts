import type { RouteHandler } from '@hono/zod-openapi'
import type { getPostureFieldsRoute } from '../routes'

export const getPostureFieldsRouteHandler: RouteHandler<typeof getPostureFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
