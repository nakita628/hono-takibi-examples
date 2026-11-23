import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePushProvidersTypeNameRoute,
  getPushProvidersRoute,
  postPushProvidersRoute,
} from '../routes'

export const getPushProvidersRouteHandler: RouteHandler<typeof getPushProvidersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPushProvidersRouteHandler: RouteHandler<typeof postPushProvidersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePushProvidersTypeNameRouteHandler: RouteHandler<
  typeof deletePushProvidersTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
