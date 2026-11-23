import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateTerminationProtectionRoute,
  postActionUpdateTerminationProtectionRoute,
} from '../routes'

export const getActionUpdateTerminationProtectionRouteHandler: RouteHandler<
  typeof getActionUpdateTerminationProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateTerminationProtectionRouteHandler: RouteHandler<
  typeof postActionUpdateTerminationProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
