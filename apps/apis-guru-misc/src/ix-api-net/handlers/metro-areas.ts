import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetroAreasIdRoute, getMetroAreasRoute } from '../routes'

export const getMetroAreasRouteHandler: RouteHandler<typeof getMetroAreasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetroAreasIdRouteHandler: RouteHandler<typeof getMetroAreasIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
