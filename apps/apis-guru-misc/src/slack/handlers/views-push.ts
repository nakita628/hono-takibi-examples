import type { RouteHandler } from '@hono/zod-openapi'
import type { getViewsPushRoute } from '../routes'

export const getViewsPushRouteHandler: RouteHandler<typeof getViewsPushRoute> = async (c) => {
  throw new Error('Not implemented')
}
