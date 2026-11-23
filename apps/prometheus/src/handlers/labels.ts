import type { RouteHandler } from '@hono/zod-openapi'
import type { getLabelsRoute, postLabelsRoute } from '../routes'

export const getLabelsRouteHandler: RouteHandler<typeof getLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLabelsRouteHandler: RouteHandler<typeof postLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
