import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetStreamIdRoute } from '../routes'

export const getGetStreamIdRouteHandler: RouteHandler<typeof getGetStreamIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
