import type { RouteHandler } from '@hono/zod-openapi'
import type { getJurisdictionRoute } from '../routes'

export const getJurisdictionRouteHandler: RouteHandler<typeof getJurisdictionRoute> = async (c) => {
  throw new Error('Not implemented')
}
