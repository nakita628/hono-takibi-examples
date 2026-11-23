import type { RouteHandler } from '@hono/zod-openapi'
import type { getProviderRoute } from '../routes'

export const getProviderRouteHandler: RouteHandler<typeof getProviderRoute> = async (c) => {
  throw new Error('Not implemented')
}
