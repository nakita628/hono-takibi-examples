import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccountRoute, postAccountShardsRoute, postAccountVerifyRoute } from '../routes'

export const postAccountRouteHandler: RouteHandler<typeof postAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountShardsRouteHandler: RouteHandler<typeof postAccountShardsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccountVerifyRouteHandler: RouteHandler<typeof postAccountVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
