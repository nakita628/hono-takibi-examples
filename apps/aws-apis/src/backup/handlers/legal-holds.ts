import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLegalHoldsLegalHoldIdCancelDescriptionRoute,
  getLegalHoldsIndexRoute,
  getLegalHoldsLegalHoldIdIndexRoute,
  getLegalHoldsLegalHoldIdRecoveryPointsRoute,
  postLegalHoldsIndexRoute,
} from '../routes'

export const deleteLegalHoldsLegalHoldIdCancelDescriptionRouteHandler: RouteHandler<
  typeof deleteLegalHoldsLegalHoldIdCancelDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLegalHoldsIndexRouteHandler: RouteHandler<
  typeof postLegalHoldsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLegalHoldsIndexRouteHandler: RouteHandler<typeof getLegalHoldsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLegalHoldsLegalHoldIdIndexRouteHandler: RouteHandler<
  typeof getLegalHoldsLegalHoldIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLegalHoldsLegalHoldIdRecoveryPointsRouteHandler: RouteHandler<
  typeof getLegalHoldsLegalHoldIdRecoveryPointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
