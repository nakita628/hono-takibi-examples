import type { RouteHandler } from '@hono/zod-openapi'
import type { getProvidersRoute } from '../routes'

export const getProvidersRouteHandler: RouteHandler<typeof getProvidersRoute> = async (c) => {
  throw new Error('Not implemented')
}
