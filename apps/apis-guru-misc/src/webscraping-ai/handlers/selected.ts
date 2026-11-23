import type { RouteHandler } from '@hono/zod-openapi'
import type { getSelectedRoute } from '../routes'

export const getSelectedRouteHandler: RouteHandler<typeof getSelectedRoute> = async (c) => {
  throw new Error('Not implemented')
}
