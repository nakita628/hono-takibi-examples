import type { RouteHandler } from '@hono/zod-openapi'
import type { getTaskMetadatasIdIndexRoute, getTaskMetadatasIndexRoute } from '../routes'

export const getTaskMetadatasIndexRouteHandler: RouteHandler<
  typeof getTaskMetadatasIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskMetadatasIdIndexRouteHandler: RouteHandler<
  typeof getTaskMetadatasIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
