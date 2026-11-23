import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1NameVoiceOfMerchantStateRoute,
  getV1ParentVerificationsRoute,
  postV1LocationFetchVerificationOptionsRoute,
  postV1NameCompleteRoute,
  postV1NameVerifyRoute,
  postV1VerificationTokensGenerateRoute,
} from '../routes'

export const postV1VerificationTokensGenerateRouteHandler: RouteHandler<
  typeof postV1VerificationTokensGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LocationFetchVerificationOptionsRouteHandler: RouteHandler<
  typeof postV1LocationFetchVerificationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameVoiceOfMerchantStateRouteHandler: RouteHandler<
  typeof getV1NameVoiceOfMerchantStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCompleteRouteHandler: RouteHandler<typeof postV1NameCompleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameVerifyRouteHandler: RouteHandler<typeof postV1NameVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentVerificationsRouteHandler: RouteHandler<
  typeof getV1ParentVerificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
