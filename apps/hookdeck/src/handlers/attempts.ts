import type { RouteHandler } from '@hono/zod-openapi'
import type { getAttemptsIdRoute, getAttemptsRoute } from '../routes'

export const getAttemptsRouteHandler: RouteHandler<typeof getAttemptsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttemptsIdRouteHandler: RouteHandler<typeof getAttemptsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
