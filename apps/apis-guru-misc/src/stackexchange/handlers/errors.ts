import type { RouteHandler } from '@hono/zod-openapi'
import type { getErrorsIdRoute, getErrorsRoute } from '../routes'

export const getErrorsRouteHandler: RouteHandler<typeof getErrorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getErrorsIdRouteHandler: RouteHandler<typeof getErrorsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
