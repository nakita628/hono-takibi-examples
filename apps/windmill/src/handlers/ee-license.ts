import type { RouteHandler } from '@hono/zod-openapi'
import type { getEeLicenseRoute } from '../routes'

export const getEeLicenseRouteHandler: RouteHandler<typeof getEeLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}
