import type { RouteHandler } from '@hono/zod-openapi'
import type { getConferencesRoute } from '../routes'

export const getConferencesRouteHandler: RouteHandler<typeof getConferencesRoute> = async (c) => {
  throw new Error('Not implemented')
}
