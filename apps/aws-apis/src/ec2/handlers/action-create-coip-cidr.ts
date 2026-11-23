import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateCoipCidrRoute, postActionCreateCoipCidrRoute } from '../routes'

export const getActionCreateCoipCidrRouteHandler: RouteHandler<
  typeof getActionCreateCoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCoipCidrRouteHandler: RouteHandler<
  typeof postActionCreateCoipCidrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
