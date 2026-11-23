import type { RouteHandler } from '@hono/zod-openapi'
import type { getAboutRoute } from '../routes'

export const getAboutRouteHandler: RouteHandler<typeof getAboutRoute> = async (c) => {
  throw new Error('Not implemented')
}
