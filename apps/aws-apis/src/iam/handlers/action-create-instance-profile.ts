import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateInstanceProfileRoute,
  postActionCreateInstanceProfileRoute,
} from '../routes'

export const getActionCreateInstanceProfileRouteHandler: RouteHandler<
  typeof getActionCreateInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateInstanceProfileRouteHandler: RouteHandler<
  typeof postActionCreateInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
