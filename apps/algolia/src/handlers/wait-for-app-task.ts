import type { RouteHandler } from '@hono/zod-openapi'
import type { getWaitForAppTaskRoute } from '../routes'

export const getWaitForAppTaskRouteHandler: RouteHandler<typeof getWaitForAppTaskRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
