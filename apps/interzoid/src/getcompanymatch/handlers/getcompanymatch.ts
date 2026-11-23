import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetcompanymatchRoute } from '../routes'

export const getGetcompanymatchRouteHandler: RouteHandler<typeof getGetcompanymatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
