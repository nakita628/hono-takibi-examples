import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListTypeRegistrationsRoute,
  postActionListTypeRegistrationsRoute,
} from '../routes'

export const getActionListTypeRegistrationsRouteHandler: RouteHandler<
  typeof getActionListTypeRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListTypeRegistrationsRouteHandler: RouteHandler<
  typeof postActionListTypeRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
