import type { RouteHandler } from '@hono/zod-openapi'
import type { postProfileJobsRoute, putProfileJobsNameRoute } from '../routes'

export const postProfileJobsRouteHandler: RouteHandler<typeof postProfileJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putProfileJobsNameRouteHandler: RouteHandler<typeof putProfileJobsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
