import type { RouteHandler } from '@hono/zod-openapi'
import type { getEinvoicesEinvoiceIdRoute, getEinvoicesRoute } from '../routes'

export const getEinvoicesRouteHandler: RouteHandler<typeof getEinvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEinvoicesEinvoiceIdRouteHandler: RouteHandler<
  typeof getEinvoicesEinvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
