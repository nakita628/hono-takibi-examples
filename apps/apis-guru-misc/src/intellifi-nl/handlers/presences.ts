import type { RouteHandler } from '@hono/zod-openapi'
import type { getPresencesIdRoute, getPresencesRoute } from '../routes'

export const getPresencesRouteHandler: RouteHandler<typeof getPresencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPresencesIdRouteHandler: RouteHandler<typeof getPresencesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
