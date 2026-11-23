import type { RouteHandler } from '@hono/zod-openapi'
import type { getCodeCodeRoute } from '../routes'

export const getCodeCodeRouteHandler: RouteHandler<typeof getCodeCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
