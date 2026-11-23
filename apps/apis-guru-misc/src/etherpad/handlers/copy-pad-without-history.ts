import type { RouteHandler } from '@hono/zod-openapi'
import type { getCopyPadWithoutHistoryRoute, postCopyPadWithoutHistoryRoute } from '../routes'

export const getCopyPadWithoutHistoryRouteHandler: RouteHandler<
  typeof getCopyPadWithoutHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCopyPadWithoutHistoryRouteHandler: RouteHandler<
  typeof postCopyPadWithoutHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
