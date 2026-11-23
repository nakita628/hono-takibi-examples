import type { RouteHandler } from '@hono/zod-openapi'
import type { getReportsRoute, postReportsRoute } from '../routes'

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsRouteHandler: RouteHandler<typeof postReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}
