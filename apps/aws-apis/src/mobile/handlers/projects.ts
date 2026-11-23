import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteProjectsProjectIdRoute, getProjectsRoute, postProjectsRoute } from '../routes'

export const postProjectsRouteHandler: RouteHandler<typeof postProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsRouteHandler: RouteHandler<typeof getProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
