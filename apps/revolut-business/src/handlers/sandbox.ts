import type { RouteHandler } from '@hono/zod-openapi'
import type { postSandboxTopupRoute, postSandboxTransactionsIdActionRoute } from '../routes'

export const postSandboxTransactionsIdActionRouteHandler: RouteHandler<
  typeof postSandboxTransactionsIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSandboxTopupRouteHandler: RouteHandler<typeof postSandboxTopupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
