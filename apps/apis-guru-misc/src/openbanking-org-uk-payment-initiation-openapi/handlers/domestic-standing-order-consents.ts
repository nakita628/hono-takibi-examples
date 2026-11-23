import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomesticStandingOrderConsentsConsentIdRoute,
  postDomesticStandingOrderConsentsRoute,
} from '../routes'

export const postDomesticStandingOrderConsentsRouteHandler: RouteHandler<
  typeof postDomesticStandingOrderConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticStandingOrderConsentsConsentIdRouteHandler: RouteHandler<
  typeof getDomesticStandingOrderConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
