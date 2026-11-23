import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInternationalStandingOrderConsentsConsentIdRoute,
  postInternationalStandingOrderConsentsRoute,
} from '../routes'

export const postInternationalStandingOrderConsentsRouteHandler: RouteHandler<
  typeof postInternationalStandingOrderConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternationalStandingOrderConsentsConsentIdRouteHandler: RouteHandler<
  typeof getInternationalStandingOrderConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
