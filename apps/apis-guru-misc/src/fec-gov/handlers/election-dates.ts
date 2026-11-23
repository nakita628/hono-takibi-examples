import type { RouteHandler } from '@hono/zod-openapi'
import type { getElectionDatesIndexRoute } from '../routes'

export const getElectionDatesIndexRouteHandler: RouteHandler<
  typeof getElectionDatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
