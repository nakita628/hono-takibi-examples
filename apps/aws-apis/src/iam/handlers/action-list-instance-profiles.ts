import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListInstanceProfilesRoute,
  postActionListInstanceProfilesRoute,
} from '../routes'

export const getActionListInstanceProfilesRouteHandler: RouteHandler<
  typeof getActionListInstanceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListInstanceProfilesRouteHandler: RouteHandler<
  typeof postActionListInstanceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
