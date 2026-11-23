import type { RouteHandler } from '@hono/zod-openapi'
import type { getLinearregRoute } from '../routes'

export const getLinearregRouteHandler: RouteHandler<typeof getLinearregRoute> = async (c) => {
  throw new Error('Not implemented')
}
