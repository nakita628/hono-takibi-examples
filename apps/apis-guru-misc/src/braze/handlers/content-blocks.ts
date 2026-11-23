import type { RouteHandler } from '@hono/zod-openapi'
import type { getContentBlocksInfoRoute, getContentBlocksListRoute } from '../routes'

export const getContentBlocksInfoRouteHandler: RouteHandler<
  typeof getContentBlocksInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContentBlocksListRouteHandler: RouteHandler<
  typeof getContentBlocksListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
