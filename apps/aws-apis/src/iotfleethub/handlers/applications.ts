import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApplicationsApplicationIdRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsRoute,
  patchApplicationsApplicationIdRoute,
  postApplicationsRoute,
} from '../routes'

export const postApplicationsRouteHandler: RouteHandler<typeof postApplicationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApplicationsRouteHandler: RouteHandler<typeof getApplicationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
