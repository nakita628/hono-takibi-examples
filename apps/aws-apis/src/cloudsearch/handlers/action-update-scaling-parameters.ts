import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateScalingParametersRoute,
  postActionUpdateScalingParametersRoute,
} from '../routes'

export const getActionUpdateScalingParametersRouteHandler: RouteHandler<
  typeof getActionUpdateScalingParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateScalingParametersRouteHandler: RouteHandler<
  typeof postActionUpdateScalingParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
