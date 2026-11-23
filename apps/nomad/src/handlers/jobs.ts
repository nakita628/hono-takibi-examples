import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsRoute, postJobsParseRoute, postJobsRoute } from '../routes'

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsRouteHandler: RouteHandler<typeof postJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsParseRouteHandler: RouteHandler<typeof postJobsParseRoute> = async (c) => {
  throw new Error('Not implemented')
}
