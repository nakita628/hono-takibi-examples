import type { RouteHandler } from '@hono/zod-openapi'
import type { getCommitteesIndexRoute } from '../routes'

export const getCommitteesIndexRouteHandler: RouteHandler<typeof getCommitteesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
