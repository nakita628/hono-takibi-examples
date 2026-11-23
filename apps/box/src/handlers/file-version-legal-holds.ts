import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFileVersionLegalHoldsFileVersionLegalHoldIdRoute,
  getFileVersionLegalHoldsRoute,
} from '../routes'

export const getFileVersionLegalHoldsFileVersionLegalHoldIdRouteHandler: RouteHandler<
  typeof getFileVersionLegalHoldsFileVersionLegalHoldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFileVersionLegalHoldsRouteHandler: RouteHandler<
  typeof getFileVersionLegalHoldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
