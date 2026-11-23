import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEnvironmentsEnvironmentUidRoute,
  getEnvironmentsEnvironmentUidRoute,
  getEnvironmentsRoute,
  postEnvironmentsRoute,
  putEnvironmentsEnvironmentUidRoute,
} from '../routes'

export const getEnvironmentsRouteHandler: RouteHandler<typeof getEnvironmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnvironmentsRouteHandler: RouteHandler<typeof postEnvironmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteEnvironmentsEnvironmentUidRouteHandler: RouteHandler<
  typeof deleteEnvironmentsEnvironmentUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentsEnvironmentUidRouteHandler: RouteHandler<
  typeof getEnvironmentsEnvironmentUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEnvironmentsEnvironmentUidRouteHandler: RouteHandler<
  typeof putEnvironmentsEnvironmentUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
