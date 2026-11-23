import type { RouteHandler } from '@hono/zod-openapi'
import type { getYearsRoute, getYearsYearRoute } from '../routes'

export const getYearsRouteHandler: RouteHandler<typeof getYearsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getYearsYearRouteHandler: RouteHandler<typeof getYearsYearRoute> = async (c) => {
  throw new Error('Not implemented')
}
