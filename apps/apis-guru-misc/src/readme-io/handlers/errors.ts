import type { RouteHandler } from '@hono/zod-openapi'
import type { getErrorsRoute } from '../routes'

export const getErrorsRouteHandler: RouteHandler<typeof getErrorsRoute> = async (c) => {
  throw new Error('Not implemented')
}
