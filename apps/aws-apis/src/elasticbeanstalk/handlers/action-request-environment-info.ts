import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRequestEnvironmentInfoRoute,
  postActionRequestEnvironmentInfoRoute,
} from '../routes'

export const getActionRequestEnvironmentInfoRouteHandler: RouteHandler<
  typeof getActionRequestEnvironmentInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRequestEnvironmentInfoRouteHandler: RouteHandler<
  typeof postActionRequestEnvironmentInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
