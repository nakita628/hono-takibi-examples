import type { RouteHandler } from '@hono/zod-openapi'
import type { getLanguagesRoute } from '../routes'

export const getLanguagesRouteHandler: RouteHandler<typeof getLanguagesRoute> = async (c) => {
  throw new Error('Not implemented')
}
