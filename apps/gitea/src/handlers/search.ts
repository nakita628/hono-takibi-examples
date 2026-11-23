import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchCodeRoute } from '../routes'

export const getSearchCodeRouteHandler: RouteHandler<typeof getSearchCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
