import type { RouteHandler } from '@hono/zod-openapi'
import type { getCommitteesCommitteeIdRoute, getCommitteesRoute } from '../routes'

export const getCommitteesRouteHandler: RouteHandler<typeof getCommitteesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteesCommitteeIdRouteHandler: RouteHandler<
  typeof getCommitteesCommitteeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
