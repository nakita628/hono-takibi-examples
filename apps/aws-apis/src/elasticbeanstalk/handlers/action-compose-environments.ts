import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionComposeEnvironmentsRoute,
  postActionComposeEnvironmentsRoute,
} from '../routes'

export const getActionComposeEnvironmentsRouteHandler: RouteHandler<
  typeof getActionComposeEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionComposeEnvironmentsRouteHandler: RouteHandler<
  typeof postActionComposeEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
