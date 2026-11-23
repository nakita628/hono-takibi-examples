import type { RouteHandler } from '@hono/zod-openapi'
import type { getInvoicesIdRoute, getInvoicesRoute } from '../routes'

export const getInvoicesRouteHandler: RouteHandler<typeof getInvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvoicesIdRouteHandler: RouteHandler<typeof getInvoicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
