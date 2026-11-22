import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1ThreeDsAuthenticationThreeDsAuthenticationTokenRoute,
  getV1ThreeDsDecisioningSecretRoute,
  postV1ThreeDsAuthenticationSimulateRoute,
  postV1ThreeDsDecisioningChallengeResponseRoute,
  postV1ThreeDsDecisioningSecretRotateRoute,
  postV1ThreeDsDecisioningSimulateEnterOtpRoute,
} from '../routes'

export const postV1ThreeDsAuthenticationSimulateRouteHandler: RouteHandler<
  typeof postV1ThreeDsAuthenticationSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ThreeDsDecisioningSimulateEnterOtpRouteHandler: RouteHandler<
  typeof postV1ThreeDsDecisioningSimulateEnterOtpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ThreeDsAuthenticationThreeDsAuthenticationTokenRouteHandler: RouteHandler<
  typeof getV1ThreeDsAuthenticationThreeDsAuthenticationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ThreeDsDecisioningSecretRouteHandler: RouteHandler<
  typeof getV1ThreeDsDecisioningSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ThreeDsDecisioningSecretRotateRouteHandler: RouteHandler<
  typeof postV1ThreeDsDecisioningSecretRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ThreeDsDecisioningChallengeResponseRouteHandler: RouteHandler<
  typeof postV1ThreeDsDecisioningChallengeResponseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
