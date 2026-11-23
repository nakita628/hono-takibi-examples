import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteResourcePolicyResourceArnRoute,
  getResourcePolicyResourceArnRoute,
  postResourcePolicyResourceArnRoute,
} from '../routes'

export const deleteResourcePolicyResourceArnRouteHandler: RouteHandler<
  typeof deleteResourcePolicyResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResourcePolicyResourceArnRouteHandler: RouteHandler<
  typeof getResourcePolicyResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResourcePolicyResourceArnRouteHandler: RouteHandler<
  typeof postResourcePolicyResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
