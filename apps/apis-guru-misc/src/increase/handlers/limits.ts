import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLimitsLimitIdRoute,
  getLimitsRoute,
  patchLimitsLimitIdRoute,
  postLimitsRoute,
} from '../routes'

export const getLimitsRouteHandler: RouteHandler<typeof getLimitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLimitsRouteHandler: RouteHandler<typeof postLimitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLimitsLimitIdRouteHandler: RouteHandler<typeof getLimitsLimitIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchLimitsLimitIdRouteHandler: RouteHandler<typeof patchLimitsLimitIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
