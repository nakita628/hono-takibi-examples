import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFactorsFactorIdRoute,
  deleteFactorsRecoveryCodesRoute,
  getFactorsRecoveryCodesRoute,
  postFactorsFactorIdChallengeRoute,
  postFactorsFactorIdVerifyRoute,
  postFactorsRecoveryCodesRegenerateRoute,
  postFactorsRecoveryCodesRoute,
  postFactorsRecoveryCodesVerifyRoute,
  postFactorsRoute,
} from '../routes'

export const postFactorsRouteHandler: RouteHandler<typeof postFactorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFactorsFactorIdChallengeRouteHandler: RouteHandler<
  typeof postFactorsFactorIdChallengeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFactorsFactorIdVerifyRouteHandler: RouteHandler<
  typeof postFactorsFactorIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFactorsFactorIdRouteHandler: RouteHandler<
  typeof deleteFactorsFactorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactorsRecoveryCodesRouteHandler: RouteHandler<
  typeof getFactorsRecoveryCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFactorsRecoveryCodesRouteHandler: RouteHandler<
  typeof postFactorsRecoveryCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFactorsRecoveryCodesRouteHandler: RouteHandler<
  typeof deleteFactorsRecoveryCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFactorsRecoveryCodesVerifyRouteHandler: RouteHandler<
  typeof postFactorsRecoveryCodesVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFactorsRecoveryCodesRegenerateRouteHandler: RouteHandler<
  typeof postFactorsRecoveryCodesRegenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
