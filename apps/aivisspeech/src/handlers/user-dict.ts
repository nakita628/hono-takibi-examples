import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserDictRoute } from '../routes'

export const getUserDictRouteHandler: RouteHandler<typeof getUserDictRoute> = async (c) => {
  throw new Error('Not implemented')
}
