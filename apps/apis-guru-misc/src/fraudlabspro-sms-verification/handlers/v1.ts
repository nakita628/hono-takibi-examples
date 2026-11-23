import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1VerificationResultRoute, postV1VerificationSendRoute } from '../routes'

export const getV1VerificationResultRouteHandler: RouteHandler<
  typeof getV1VerificationResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VerificationSendRouteHandler: RouteHandler<
  typeof postV1VerificationSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}
