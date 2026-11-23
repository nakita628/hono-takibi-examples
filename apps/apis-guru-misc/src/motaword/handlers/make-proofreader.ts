import type { RouteHandler } from '@hono/zod-openapi'
import type { postMakeProofreaderRoute } from '../routes'

export const postMakeProofreaderRouteHandler: RouteHandler<
  typeof postMakeProofreaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
