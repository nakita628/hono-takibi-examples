import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1betaNameRoute } from '../routes'

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
