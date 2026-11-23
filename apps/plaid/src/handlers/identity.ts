import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postIdentityDocumentsUploadsGetRoute,
  postIdentityGetRoute,
  postIdentityMatchListRoute,
  postIdentityMatchRoute,
  postIdentityRefreshRoute,
} from '../routes'

export const postIdentityGetRouteHandler: RouteHandler<typeof postIdentityGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityDocumentsUploadsGetRouteHandler: RouteHandler<
  typeof postIdentityDocumentsUploadsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityMatchRouteHandler: RouteHandler<typeof postIdentityMatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIdentityMatchListRouteHandler: RouteHandler<
  typeof postIdentityMatchListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityRefreshRouteHandler: RouteHandler<
  typeof postIdentityRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
