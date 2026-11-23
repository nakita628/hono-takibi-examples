import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postBusinessVerificationCreateRoute,
  postBusinessVerificationGetRoute,
} from '../routes'

export const postBusinessVerificationGetRouteHandler: RouteHandler<
  typeof postBusinessVerificationGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBusinessVerificationCreateRouteHandler: RouteHandler<
  typeof postBusinessVerificationCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
