import type { RouteHandler } from '@hono/zod-openapi'
import type { postRepertoireRoute, putRepertoireRoute } from '../routes'

export const postRepertoireRouteHandler: RouteHandler<typeof postRepertoireRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepertoireRouteHandler: RouteHandler<typeof putRepertoireRoute> = async (c) => {
  throw new Error('Not implemented')
}
