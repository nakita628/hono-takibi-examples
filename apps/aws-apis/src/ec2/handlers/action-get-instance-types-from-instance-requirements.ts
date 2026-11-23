import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetInstanceTypesFromInstanceRequirementsRoute,
  postActionGetInstanceTypesFromInstanceRequirementsRoute,
} from '../routes'

export const getActionGetInstanceTypesFromInstanceRequirementsRouteHandler: RouteHandler<
  typeof getActionGetInstanceTypesFromInstanceRequirementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetInstanceTypesFromInstanceRequirementsRouteHandler: RouteHandler<
  typeof postActionGetInstanceTypesFromInstanceRequirementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
