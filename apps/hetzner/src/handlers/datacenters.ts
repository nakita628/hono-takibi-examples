import type { RouteHandler } from '@hono/zod-openapi'
import type { getDatacentersIdRoute, getDatacentersRoute } from '../routes'

export const getDatacentersRouteHandler: RouteHandler<typeof getDatacentersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatacentersIdRouteHandler: RouteHandler<typeof getDatacentersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
