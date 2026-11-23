import type { RouteHandler } from '@hono/zod-openapi'
import type { getEpsRevisionsRoute } from '../routes'

export const getEpsRevisionsRouteHandler: RouteHandler<typeof getEpsRevisionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
