import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetInstanceUefiDataRoute,
  postActionGetInstanceUefiDataRoute,
} from '../routes'

export const getActionGetInstanceUefiDataRouteHandler: RouteHandler<
  typeof getActionGetInstanceUefiDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetInstanceUefiDataRouteHandler: RouteHandler<
  typeof postActionGetInstanceUefiDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
