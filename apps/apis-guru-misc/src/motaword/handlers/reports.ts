import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postReportsFilterRoute,
  postReportsLanguagePairsRoute,
  postReportsProjectsRoute,
  postReportsQaRoute,
  postReportsUsersRoute,
} from '../routes'

export const postReportsFilterRouteHandler: RouteHandler<typeof postReportsFilterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postReportsLanguagePairsRouteHandler: RouteHandler<
  typeof postReportsLanguagePairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsProjectsRouteHandler: RouteHandler<
  typeof postReportsProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsQaRouteHandler: RouteHandler<typeof postReportsQaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsUsersRouteHandler: RouteHandler<typeof postReportsUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
