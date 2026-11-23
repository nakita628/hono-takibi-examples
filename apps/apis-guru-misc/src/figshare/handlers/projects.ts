import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProjectsProjectIdArticlesRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  postProjectsSearchRoute,
} from '../routes'

export const getProjectsRouteHandler: RouteHandler<typeof getProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsSearchRouteHandler: RouteHandler<typeof postProjectsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProjectsProjectIdRouteHandler: RouteHandler<
  typeof getProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsProjectIdArticlesRouteHandler: RouteHandler<
  typeof getProjectsProjectIdArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
