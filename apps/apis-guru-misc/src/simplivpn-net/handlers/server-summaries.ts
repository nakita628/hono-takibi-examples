import type { RouteHandler } from '@hono/zod-openapi'
import type { getServerSummariesRoute } from '../routes'

export const getServerSummariesRouteHandler: RouteHandler<typeof getServerSummariesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
