import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEnvironmentEnvironmentIdRoute,
  getEnvironmentEnvironmentIdRoute,
  getEnvironmentRoute,
  postEnvironmentRoute,
  putEnvironmentEnvironmentIdRoute,
} from '../routes'

export const postEnvironmentRouteHandler: RouteHandler<typeof postEnvironmentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentRouteHandler: RouteHandler<typeof getEnvironmentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEnvironmentEnvironmentIdRouteHandler: RouteHandler<
  typeof deleteEnvironmentEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentEnvironmentIdRouteHandler: RouteHandler<
  typeof getEnvironmentEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEnvironmentEnvironmentIdRouteHandler: RouteHandler<
  typeof putEnvironmentEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
