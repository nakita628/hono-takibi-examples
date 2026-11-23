import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVerificationsRoute,
  postVerificationsRoute,
  postVerificationsVerificationVerifyRoute,
} from '../routes'

export const getVerificationsRouteHandler: RouteHandler<typeof getVerificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVerificationsRouteHandler: RouteHandler<typeof postVerificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVerificationsVerificationVerifyRouteHandler: RouteHandler<
  typeof postVerificationsVerificationVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
