import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAuthnK8sServiceIdAccountLoginAuthenticateRoute,
  postAuthnK8sServiceIdInjectClientCertRoute,
} from '../routes'

export const postAuthnK8sServiceIdInjectClientCertRouteHandler: RouteHandler<
  typeof postAuthnK8sServiceIdInjectClientCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthnK8sServiceIdAccountLoginAuthenticateRouteHandler: RouteHandler<
  typeof postAuthnK8sServiceIdAccountLoginAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
