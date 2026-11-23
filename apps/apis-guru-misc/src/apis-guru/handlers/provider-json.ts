import type { RouteHandler } from '@hono/zod-openapi'
import type { getProviderJsonRoute } from '../routes'

export const getProviderJsonRouteHandler: RouteHandler<typeof getProviderJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
