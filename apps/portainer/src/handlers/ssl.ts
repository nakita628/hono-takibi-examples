import type { RouteHandler } from '@hono/zod-openapi'
import type { getSslRoute, putSslRoute } from '../routes'

export const getSslRouteHandler: RouteHandler<typeof getSslRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSslRouteHandler: RouteHandler<typeof putSslRoute> = async (c) => {
  throw new Error('Not implemented')
}
