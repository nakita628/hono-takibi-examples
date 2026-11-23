import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProjectsIdRoute,
  getProjectsIdRoute,
  getProjectsRoute,
  patchProjectsIdRoute,
  postProjectsRoute,
} from '../routes'

export const getProjectsRouteHandler: RouteHandler<typeof getProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsRouteHandler: RouteHandler<typeof postProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsIdRouteHandler: RouteHandler<typeof deleteProjectsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProjectsIdRouteHandler: RouteHandler<typeof getProjectsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProjectsIdRouteHandler: RouteHandler<typeof patchProjectsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
