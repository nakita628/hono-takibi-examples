import type { RouteHandler } from '@hono/zod-openapi'
import type { getMtermvectorsRoute, postMtermvectorsRoute } from '../routes'

export const getMtermvectorsRouteHandler: RouteHandler<typeof getMtermvectorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMtermvectorsRouteHandler: RouteHandler<typeof postMtermvectorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
