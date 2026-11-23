import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsRoute, postJobsRoute, putJobsNameRoute } from '../routes'

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsRouteHandler: RouteHandler<typeof postJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putJobsNameRouteHandler: RouteHandler<typeof putJobsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
