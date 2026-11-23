import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategorizedObjectNamesRoute } from '../routes'

export const getCategorizedObjectNamesRouteHandler: RouteHandler<
  typeof getCategorizedObjectNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
