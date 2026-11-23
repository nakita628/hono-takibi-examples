import type { RouteHandler } from '@hono/zod-openapi'
import type { getWhoisId4nRoute } from '../routes'

export const getWhoisId4nRouteHandler: RouteHandler<typeof getWhoisId4nRoute> = async (c) => {
  throw new Error('Not implemented')
}
