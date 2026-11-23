import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocsRoute } from '../routes'

export const getDocsRouteHandler: RouteHandler<typeof getDocsRoute> = async (c) => {
  throw new Error('Not implemented')
}
