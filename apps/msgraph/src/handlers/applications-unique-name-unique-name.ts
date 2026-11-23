import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApplicationsUniqueNameUniqueNameRoute,
  getApplicationsUniqueNameUniqueNameRoute,
  patchApplicationsUniqueNameUniqueNameRoute,
} from '../routes'

export const getApplicationsUniqueNameUniqueNameRouteHandler: RouteHandler<
  typeof getApplicationsUniqueNameUniqueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsUniqueNameUniqueNameRouteHandler: RouteHandler<
  typeof patchApplicationsUniqueNameUniqueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsUniqueNameUniqueNameRouteHandler: RouteHandler<
  typeof deleteApplicationsUniqueNameUniqueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
