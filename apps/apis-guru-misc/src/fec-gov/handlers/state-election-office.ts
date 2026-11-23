import type { RouteHandler } from '@hono/zod-openapi'
import type { getStateElectionOfficeIndexRoute } from '../routes'

export const getStateElectionOfficeIndexRouteHandler: RouteHandler<
  typeof getStateElectionOfficeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
