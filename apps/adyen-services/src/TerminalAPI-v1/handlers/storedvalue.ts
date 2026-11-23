import type { RouteHandler } from '@hono/zod-openapi'
import type { postStoredvalueRoute } from '../routes'

export const postStoredvalueRouteHandler: RouteHandler<typeof postStoredvalueRoute> = async (c) => {
  throw new Error('Not implemented')
}
