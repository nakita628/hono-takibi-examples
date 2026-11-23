import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postPaymentProfileCreateRoute,
  postPaymentProfileGetRoute,
  postPaymentProfileRemoveRoute,
} from '../routes'

export const postPaymentProfileCreateRouteHandler: RouteHandler<
  typeof postPaymentProfileCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentProfileGetRouteHandler: RouteHandler<
  typeof postPaymentProfileGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentProfileRemoveRouteHandler: RouteHandler<
  typeof postPaymentProfileRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
