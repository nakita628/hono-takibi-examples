import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublishersIdRoute, getPublishersRoute } from '../routes'

export const getPublishersRouteHandler: RouteHandler<typeof getPublishersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPublishersIdRouteHandler: RouteHandler<typeof getPublishersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
