import type { RouteHandler } from '@hono/zod-openapi'
import type { getLabelsRoute } from '../routes'

export const getLabelsRouteHandler: RouteHandler<typeof getLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
