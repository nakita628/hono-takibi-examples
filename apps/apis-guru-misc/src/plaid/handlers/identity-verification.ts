import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postIdentityVerificationCreateRoute,
  postIdentityVerificationGetRoute,
  postIdentityVerificationListRoute,
  postIdentityVerificationRetryRoute,
} from '../routes'

export const postIdentityVerificationCreateRouteHandler: RouteHandler<
  typeof postIdentityVerificationCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityVerificationGetRouteHandler: RouteHandler<
  typeof postIdentityVerificationGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityVerificationListRouteHandler: RouteHandler<
  typeof postIdentityVerificationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityVerificationRetryRouteHandler: RouteHandler<
  typeof postIdentityVerificationRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
