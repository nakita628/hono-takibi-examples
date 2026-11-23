import type { RouteHandler } from '@hono/zod-openapi'
import type { getMeCollaborationsRoute, getMeRoute } from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMeCollaborationsRouteHandler: RouteHandler<
  typeof getMeCollaborationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
