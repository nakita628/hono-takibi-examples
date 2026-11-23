import type { RouteHandler } from '@hono/zod-openapi'
import type { getMuseumHoursRoute } from '../routes'

export const getMuseumHoursRouteHandler: RouteHandler<typeof getMuseumHoursRoute> = async (c) => {
  throw new Error('Not implemented')
}
