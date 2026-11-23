import type { RouteHandler } from '@hono/zod-openapi'
import type { getProfilesRoute } from '../routes'

export const getProfilesRouteHandler: RouteHandler<typeof getProfilesRoute> = async (c) => {
  throw new Error('Not implemented')
}
