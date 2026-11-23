import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProjectsProjectIdRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  patchProjectsProjectIdRoute,
  postProjectsRoute,
} from '../routes'

export const getProjectsRouteHandler: RouteHandler<typeof getProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsRouteHandler: RouteHandler<typeof postProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsProjectIdRouteHandler: RouteHandler<
  typeof getProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProjectsProjectIdRouteHandler: RouteHandler<
  typeof patchProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
