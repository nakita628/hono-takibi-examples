import type { RouteHandler } from '@hono/zod-openapi'
import type { getPeopleGeoRoute } from '../routes'

export const getPeopleGeoRouteHandler: RouteHandler<typeof getPeopleGeoRoute> = async (c) => {
  throw new Error('Not implemented')
}
