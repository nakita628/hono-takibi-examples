import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteInstanceProfileRoute,
  postActionDeleteInstanceProfileRoute,
} from '../routes'

export const getActionDeleteInstanceProfileRouteHandler: RouteHandler<
  typeof getActionDeleteInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteInstanceProfileRouteHandler: RouteHandler<
  typeof postActionDeleteInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
