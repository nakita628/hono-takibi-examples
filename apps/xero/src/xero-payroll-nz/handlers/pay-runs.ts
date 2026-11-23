import type { RouteHandler } from '@hono/zod-openapi'
import type { getPayRunsPayRunIDRoute, getPayRunsRoute, postPayRunsRoute } from '../routes'

export const getPayRunsRouteHandler: RouteHandler<typeof getPayRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayRunsRouteHandler: RouteHandler<typeof postPayRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPayRunsPayRunIDRouteHandler: RouteHandler<typeof getPayRunsPayRunIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
