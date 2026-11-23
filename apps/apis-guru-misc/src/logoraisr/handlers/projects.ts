import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProjectsIndexRoute,
  getProjectsProjectNumberIndexRoute,
  postProjectsIndexRoute,
} from '../routes'

export const getProjectsIndexRouteHandler: RouteHandler<typeof getProjectsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postProjectsIndexRouteHandler: RouteHandler<typeof postProjectsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProjectsProjectNumberIndexRouteHandler: RouteHandler<
  typeof getProjectsProjectNumberIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
