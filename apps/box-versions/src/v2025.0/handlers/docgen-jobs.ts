import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocgenJobsJobIdRoute, getDocgenJobsRoute } from '../routes'

export const getDocgenJobsJobIdRouteHandler: RouteHandler<typeof getDocgenJobsJobIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDocgenJobsRouteHandler: RouteHandler<typeof getDocgenJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}
