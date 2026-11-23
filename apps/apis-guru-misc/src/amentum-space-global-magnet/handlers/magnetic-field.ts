import type { RouteHandler } from '@hono/zod-openapi'
import type { getMagneticFieldRoute } from '../routes'

export const getMagneticFieldRouteHandler: RouteHandler<typeof getMagneticFieldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
