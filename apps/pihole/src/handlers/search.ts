import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchDomainRoute } from '../routes'

export const getSearchDomainRouteHandler: RouteHandler<typeof getSearchDomainRoute> = async (c) => {
  throw new Error('Not implemented')
}
