import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchCodeRoute,
  getSearchCommitsRoute,
  getSearchIssuesRoute,
  getSearchLabelsRoute,
  getSearchRepositoriesRoute,
  getSearchTopicsRoute,
  getSearchUsersRoute,
} from '../routes'

export const getSearchCodeRouteHandler: RouteHandler<typeof getSearchCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchCommitsRouteHandler: RouteHandler<typeof getSearchCommitsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSearchIssuesRouteHandler: RouteHandler<typeof getSearchIssuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchLabelsRouteHandler: RouteHandler<typeof getSearchLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchRepositoriesRouteHandler: RouteHandler<
  typeof getSearchRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchTopicsRouteHandler: RouteHandler<typeof getSearchTopicsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchUsersRouteHandler: RouteHandler<typeof getSearchUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
