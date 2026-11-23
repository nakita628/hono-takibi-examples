import type { RouteHandler } from '@hono/zod-openapi'
import type { getOralquestiontimesListRoute } from '../routes'

export const getOralquestiontimesListRouteHandler: RouteHandler<
  typeof getOralquestiontimesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
