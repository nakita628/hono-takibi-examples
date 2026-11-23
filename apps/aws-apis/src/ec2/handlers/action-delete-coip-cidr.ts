import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteCoipCidrRoute, postActionDeleteCoipCidrRoute } from '../routes'

export const getActionDeleteCoipCidrRouteHandler: RouteHandler<
  typeof getActionDeleteCoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCoipCidrRouteHandler: RouteHandler<
  typeof postActionDeleteCoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
