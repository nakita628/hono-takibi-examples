import type { RouteHandler } from '@hono/zod-openapi'
import type { getCourtCoverageCourtIdRoute } from '../routes'

export const getCourtCoverageCourtIdRouteHandler: RouteHandler<
  typeof getCourtCoverageCourtIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
