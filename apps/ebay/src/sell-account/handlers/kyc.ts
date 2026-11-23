import type { RouteHandler } from '@hono/zod-openapi'
import type { getKycRoute } from '../routes'

export const getKycRouteHandler: RouteHandler<typeof getKycRoute> = async (c) => {
  throw new Error('Not implemented')
}
