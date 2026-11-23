import type { RouteHandler } from '@hono/zod-openapi'
import type { getSubLabelsRoute } from '../routes'

export const getSubLabelsRouteHandler: RouteHandler<typeof getSubLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
