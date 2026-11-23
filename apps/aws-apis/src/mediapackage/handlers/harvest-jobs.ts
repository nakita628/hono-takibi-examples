import type { RouteHandler } from '@hono/zod-openapi'
import type { getHarvestJobsIdRoute, getHarvestJobsRoute, postHarvestJobsRoute } from '../routes'

export const postHarvestJobsRouteHandler: RouteHandler<typeof postHarvestJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHarvestJobsRouteHandler: RouteHandler<typeof getHarvestJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHarvestJobsIdRouteHandler: RouteHandler<typeof getHarvestJobsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
