import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEnvironmentsEnvironmentIdResourcesRoute,
  deleteEnvironmentsEnvironmentIdRoute,
  getEnvironmentsEnvironmentIdRoute,
  getEnvironmentsRoute,
  patchEnvironmentsEnvironmentIdRoute,
  postEnvironmentsEnvironmentIdResourcesRoute,
  postEnvironmentsRoute,
} from '../routes'

export const postEnvironmentsRouteHandler: RouteHandler<typeof postEnvironmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEnvironmentsRouteHandler: RouteHandler<typeof getEnvironmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof getEnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof patchEnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof deleteEnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnvironmentsEnvironmentIdResourcesRouteHandler: RouteHandler<
  typeof postEnvironmentsEnvironmentIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEnvironmentsEnvironmentIdResourcesRouteHandler: RouteHandler<
  typeof deleteEnvironmentsEnvironmentIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
