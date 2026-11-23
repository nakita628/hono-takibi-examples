import type { RouteHandler } from '@hono/zod-openapi'
import type { getInvoicesIdRoute } from '../routes'

export const getInvoicesIdRouteHandler: RouteHandler<typeof getInvoicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
