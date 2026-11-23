import type { RouteHandler } from '@hono/zod-openapi'
import type { postReindexRoute, postReindexTaskIdRethrottleRoute } from '../routes'

export const postReindexRouteHandler: RouteHandler<typeof postReindexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReindexTaskIdRethrottleRouteHandler: RouteHandler<
  typeof postReindexTaskIdRethrottleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
