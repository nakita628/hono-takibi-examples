import type { RouteHandler } from '@hono/zod-openapi'
import type { getTspRoute, patchTspRoute } from '../routes'

export const getTspRouteHandler: RouteHandler<typeof getTspRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTspRouteHandler: RouteHandler<typeof patchTspRoute> = async (c) => {
  throw new Error('Not implemented')
}
