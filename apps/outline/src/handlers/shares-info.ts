import type { RouteHandler } from '@hono/zod-openapi'
import type { postSharesInfoRoute } from '../routes'

export const postSharesInfoRouteHandler: RouteHandler<typeof postSharesInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
