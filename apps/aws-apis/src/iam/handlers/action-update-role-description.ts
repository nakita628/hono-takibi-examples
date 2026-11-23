import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateRoleDescriptionRoute,
  postActionUpdateRoleDescriptionRoute,
} from '../routes'

export const getActionUpdateRoleDescriptionRouteHandler: RouteHandler<
  typeof getActionUpdateRoleDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateRoleDescriptionRouteHandler: RouteHandler<
  typeof postActionUpdateRoleDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
