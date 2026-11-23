import type { RouteHandler } from '@hono/zod-openapi'
import type { getOralquestionsListRoute } from '../routes'

export const getOralquestionsListRouteHandler: RouteHandler<
  typeof getOralquestionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
