import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateImageRoute, postActionCreateImageRoute } from '../routes'

export const getActionCreateImageRouteHandler: RouteHandler<
  typeof getActionCreateImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateImageRouteHandler: RouteHandler<
  typeof postActionCreateImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
