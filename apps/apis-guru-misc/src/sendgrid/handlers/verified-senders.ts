import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVerifiedSendersIdRoute,
  getVerifiedSendersDomainsRoute,
  getVerifiedSendersRoute,
  getVerifiedSendersStepsCompletedRoute,
  getVerifiedSendersVerifyTokenRoute,
  patchVerifiedSendersIdRoute,
  postVerifiedSendersResendIdRoute,
  postVerifiedSendersRoute,
} from '../routes'

export const getVerifiedSendersRouteHandler: RouteHandler<typeof getVerifiedSendersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVerifiedSendersRouteHandler: RouteHandler<
  typeof postVerifiedSendersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVerifiedSendersDomainsRouteHandler: RouteHandler<
  typeof getVerifiedSendersDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerifiedSendersResendIdRouteHandler: RouteHandler<
  typeof postVerifiedSendersResendIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVerifiedSendersStepsCompletedRouteHandler: RouteHandler<
  typeof getVerifiedSendersStepsCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVerifiedSendersVerifyTokenRouteHandler: RouteHandler<
  typeof getVerifiedSendersVerifyTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVerifiedSendersIdRouteHandler: RouteHandler<
  typeof deleteVerifiedSendersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVerifiedSendersIdRouteHandler: RouteHandler<
  typeof patchVerifiedSendersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
